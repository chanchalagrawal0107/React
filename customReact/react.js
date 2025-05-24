function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Set children (text)
  domElement.innerHTML = reactElement.children;

  // Set props as attributes (safely)
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append to container
  container.appendChild(domElement);
}

// A simple React-like element
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
};

//<a href="https://google.com" target="_blank">Click me to visit google</a>

// Mounting
const rootElement = document.getElementById('root');
customRender(reactElement, rootElement);

