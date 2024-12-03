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
    </div>
  );
};

export default CSSFundamentals;
