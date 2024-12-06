const CSSFundamentals = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">CSS Fundamentals</h2>
      <p className="mt-2 text-gray-700">
        CSS (Cascading Style Sheets) is used to style HTML elements and layout
        webpages. Some important concepts in CSS include:
      </p>
      <ul className="list-disc ml-6 mt-4">
        <li>Selectors: Target specific elements on the webpage.</li>
        <li>
          Properties: Define the style to be applied to the selected elements
          (e.g., `color`, `font-size`).
        </li>
        <li>
          Box Model: Describes the rectangular boxes generated for elements,
          including margins, borders, padding, and content.
        </li>
        <li>
          Positioning: Determines how elements are positioned on the page (e.g.,
          `relative`, `absolute`, `fixed`).
        </li>
        <li>
          Flexbox: A layout model that allows for more flexible and responsive
          designs.
        </li>
        <li>
          Grid Layout: A powerful layout system that uses rows and columns to
          organize content.
        </li>
      </ul>
      <p className="mt-4 text-gray-700">
        In this section, you will learn how to use CSS to style your web pages
        and create visually appealing designs.
      </p>
      <p className="mt-2 text-gray-600">
        To get started with CSS, you'll need to learn how to link a stylesheet
        to your HTML file, write CSS rules, and apply them to different
        elements.
      </p>
      <h3 className="mt-6 text-lg font-semibold">Step-by-Step CSS Examples</h3>
      <ol className="list-decimal ml-6 mt-4">
        <li>
          <strong>Creating a Simple CSS File:</strong>
          <p>Start by creating a CSS file named <code>styles.css</code> in your project directory.</p>
          <pre>
            <code>{`/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}`}</code>
          </pre>
          <p>This sets a default font and background color for your webpage.</p>
        </li>
        <li>
          <strong>Linking the CSS File to HTML:</strong>
          <p>In your HTML file, link the CSS file in the <code>&lt;head&gt;</code> section:</p>
          <pre>
            <code>{`<link rel="stylesheet" href="styles.css">`}</code>
          </pre>
          <p>This allows the styles defined in <code>styles.css</code> to be applied to your HTML elements.</p>
        </li>
        <li>
          <strong>Using Class Selectors:</strong>
          <p>Add a class to an HTML element and define styles in your CSS:</p>
          <pre>
            <code>{`<div class="container">Hello World</div>`}</code>
          </pre>
          <pre>
            <code>{`.container {
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
}`}</code>
          </pre>
          <p>This will create a white box with padding and a border around the text "Hello World".</p>
        </li>
        <li>
          <strong>Implementing Flexbox:</strong>
          <p>To create a flexible layout, use Flexbox:</p>
          <pre>
            <code>{`<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
</div>`}</code>
          </pre>
          <pre>
            <code>{`.flex-container {
  display: flex;
  justify-content: space-around;
}

.flex-item {
  background-color: lightblue;
  padding: 10px;
}`}</code>
          </pre>
          <p>This will arrange the items in a row with space around them.</p>
        </li>
        <li>
          <strong>Creating Responsive Design:</strong>
          <p>Use media queries to make your design responsive:</p>
          <pre>
            <code>{`@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}`}</code>
          </pre>
          <p>This will stack the flex items vertically on screens smaller than 600px.</p>
        </li>
        <li>
          <strong>Adding Hover Effects:</strong>
          <p>Enhance user experience with hover effects:</p>
          <pre>
            <code>{`<button class="hover-button">Hover Me!</button>`}</code>
          </pre>
          <pre>
            <code>{`.hover-button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
}

.hover-button:hover {
  background-color: darkblue;
}`}</code>
          </pre>
          <p>This will change the button's background color when hovered over.</p>
        </li>
      </ol>
      <p className="mt-2 text-gray-600">
        By following these steps, you will be able to effectively use CSS to enhance the appearance of your web pages.
      </p>
      <h3 className="mt-6 text-lg font-semibold">Additional CSS Examples</h3>
      <ol className="list-decimal ml-6 mt-4">
        <li>
          <strong>Example of a Class Selector:</strong> 
          <pre>
            <code>{`.my-class {
  color: blue;
  font-size: 20px;
}`}</code>
          </pre>
          <p>This will apply blue color and a font size of 20px to all elements with the class <code>my-class</code>.</p>
        </li>
        <li>
          <strong>Example of an ID Selector:</strong> 
          <pre>
            <code>{`#my-id {
  background-color: yellow;
  padding: 10px;
}`}</code>
          </pre>
          <p>This will apply a yellow background and 10px padding to the element with the ID <code>my-id</code>.</p>
        </li>
        <li>
          <strong>Example of Flexbox:</strong> 
          <pre>
            <code>{`.flex-container {
  display: flex;
  justify-content: space-between;
}`}</code>
          </pre>
          <p>This will create a flex container that spaces its child elements evenly.</p>
        </li>
        <li>
          <strong>Example of Grid Layout:</strong> 
          <pre>
            <code>{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`}</code>
          </pre>
          <p>This will create a grid layout with three equal columns.</p>
        </li>
        <li>
          <strong>Example of Media Queries:</strong> 
          <pre>
            <code>{`@media (max-width: 768px) {
  .responsive {
    font-size: 14px;
  }
}`}</code>
          </pre>
          <p>This will change the font size of elements with the class <code>responsive</code> to 14px on screens smaller than 768px.</p>
        </li>
      </ol>
      <h3 className="mt-6 text-lg font-semibold">More CSS Concepts</h3>
      <ol className="list-decimal ml-6 mt-4">
        <li>
          <strong>CSS Variables:</strong> 
          <pre>
            <code>{`:root {
  --main-color: #3498db;
}`}</code>
          </pre>
          <p>CSS variables allow you to store values that can be reused throughout your stylesheet. You can use them like this:</p>
          <pre>
            <code>{`body {
  background-color: var(--main-color);
}`}</code>
          </pre>
        </li>
        <li>
          <strong>Transitions:</strong> 
          <pre>
            <code>{`.box {
  transition: background-color 0.5s ease;
}`}</code>
          </pre>
          <p>This will create a smooth transition effect when the background color of the element with the class <code>box</code> changes.</p>
        </li>
        <li>
          <strong>Animations:</strong> 
          <pre>
            <code>{`@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

.animated {
  animation: example 4s;
}`}</code>
          </pre>
          <p>This defines a simple animation that changes the background color from red to yellow over 4 seconds.</p>
        </li>
        <li>
          <strong>Box Shadows:</strong> 
          <pre>
            <code>{`.shadow {
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}`}</code>
          </pre>
          <p>This will add a shadow effect to the element with the class <code>shadow</code>.</p>
        </li>
        <li>
          <strong>Hover Effects:</strong> 
          <pre>
            <code>{`.hover-effect:hover {
  color: red;
  font-weight: bold;
}`}</code>
          </pre>
          <p>This will change the text color to red and make it bold when the user hovers over the element with the class <code>hover-effect</code>.</p>
        </li>
      </ol>
    </div>
  );
};

export default CSSFundamentals;
