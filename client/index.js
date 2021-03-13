import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/index.jsx';
import ajaxRequests from './ajaxRequests.js';

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// var switchTheme = function(e) {
//   if (e.target.checked) {
//       document.documentElement.setAttribute('data-theme', 'dark');
//       }
//   else {
//       document.documentElement.setAttribute('data-theme', 'light');
//     }
//   }

//   toggleSwitch.addEventListener('change', switchTheme, false);

const globalClickTrackerWrapper = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleGlobalClick = this.handleGlobalClick.bind(this);
      this.state = {
        globalClickTracker: {
          'Overview': {
            'count' : 0,
            'data': []
          },
          'RelatedItemsAndComparisons': {
            'count': 0,
            'data': []
          },
          'Questions': {
            'count': 0,
            'data': []
          },
          'Reviews': {
            'count': 0,
            'data': []
          },
        }
      };
    }

    handleGlobalClick(e, moduleName) {
      // if parentNode.className === 'widget', then capture the id (slice the string from index 6 onwards; this is the key on global click object)
      var node = e.target;
      var nodeClassName = e.target.className;
      while (typeof nodeClassName !== 'string' || !nodeClassName.includes('widget-for-clicks')) {
        node = node.parentNode;
        nodeClassName = node.className;
      }
      var moduleName = node.id.slice(6);

      var clickObject = {
        nodeName: e.target.nodeName,
        className: e.target.className,
        id: e.target.id,
        textContent: e.target.textContent,
        dateOfClick: new Date()
      };

      ajaxRequests.postGlobalClickTracker(clickObject, () => {
        var updatedGlobalClickTracker = this.state.globalClickTracker;
        var updatedClicksArray = updatedGlobalClickTracker[moduleName].data;
        updatedClicksArray.push(clickObject);
        updatedGlobalClickTracker[moduleName].count++;
        this.setState({ globalClickTracker: updatedGlobalClickTracker });
      });
    }

    render() {
      return (
        <div onClick={(e) => this.handleGlobalClick(e, 'Overview')}>
          <Component />
        </div>
      );
    }

  }
};

ReactDOM.render(React.createElement(globalClickTrackerWrapper(App)), document.getElementById('app'));


// -define a function on index.js that takes in a Component as an argument and returns  the component wrapped in a React.Fragment, with the new functionality of the global click tracker
// -this will return a “class extends React.Component” that defines this new functionality while still rendering the Component supplied as an argument
// ReactDOM.render( React.createElement( fn(App), document.getElementById(‘app’) ) );
// -call the function (providing the “App” component) as the first argument to ReactDOM.render(), but with Reac.createElement called on it