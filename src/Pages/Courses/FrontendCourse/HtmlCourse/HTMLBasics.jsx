const HTMLBasics = () => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-4">HTML Basics</h2>
        <p className="text-lg text-gray-700 mb-4">HTML stands for HyperText Markup Language. It's the standard language for creating webpages.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Introduction</h3>
        <p className="text-gray-600 mb-4">HTML, or HyperText Markup Language, is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. HTML describes the structure of a webpage semantically and originally included cues for the appearance of the document.</p>
        
        <h3 className="text-2xl font-semibold mt-6">The Importance of HTML</h3>
        <p className="text-gray-600 mb-4">HTML is crucial for web development as it provides the basic structure for web pages. Without HTML, web browsers would not know how to display content. It allows developers to create structured documents that can be easily read and understood by both humans and machines.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Elements and Tags</h3>
        <p className="text-gray-600 mb-4">HTML is made up of elements, which are the building blocks of web pages. Each element is defined by a tag, which consists of an opening tag and a closing tag. For example, the <code>&lt;p&gt;</code> tag is used to define a paragraph. Tags can also have attributes that provide additional information about the element.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Document Structure</h3>
        <p className="text-gray-600 mb-4">An HTML document has a specific structure that includes a doctype declaration, a head section, and a body section. The doctype declaration tells the browser which version of HTML the document is using. The head section contains meta-information about the document, such as its title and links to stylesheets. The body section contains the content that is displayed on the webpage.</p>
        
        <h3 className="text-2xl font-semibold mt-6">Semantic HTML</h3>
        <p className="text-gray-600 mb-4">Semantic HTML refers to the use of HTML markup that conveys meaning about the content contained within. For example, using <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> tags helps search engines and other user agents understand the structure and importance of the content.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Forms and Input Elements</h3>
        <p className="text-gray-600 mb-4">Forms are a crucial part of HTML, allowing users to submit data to a server. HTML provides various input elements such as text fields, checkboxes, radio buttons, and submit buttons. Each input element can be customized with attributes to enhance functionality and user experience.</p>
        
        <h3 className="text-2xl font-semibold mt-6">Accessibility in HTML</h3>
        <p className="text-gray-600 mb-4">Creating accessible web content is essential for ensuring that all users, including those with disabilities, can navigate and understand web pages. HTML provides various attributes and elements, such as <code>alt</code> attributes for images and <code>aria</code> roles, to improve accessibility.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Best Practices</h3>
        <p className="text-gray-600 mb-4">Following best practices in HTML development can lead to cleaner, more maintainable code. This includes using semantic elements, keeping the markup organized, and ensuring that the code is valid and well-structured. Tools like validators can help check for errors in HTML code.</p>
        
        <h3 className="text-2xl font-semibold mt-6">Future of HTML</h3>
        <p className="text-gray-600 mb-4">HTML continues to evolve, with new features and elements being added to improve functionality and user experience. The introduction of HTML5 brought significant changes, including new semantic elements, multimedia support, and improved APIs for web applications.</p>
        
        <h3 className="text-2xl font-semibold mt-6">Basic Structure of an HTML Document</h3>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            {`<!DOCTYPE html>
<html>
<head>
    <title>Your Title Here</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
          </code>
        </pre>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Examples</h3>
        <p className="text-gray-600 mb-4">Here are some examples of HTML elements:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>&lt;h1&gt;:</strong> Main heading</li>
          <li><strong>&lt;p&gt;:</strong> A paragraph of text</li>
          <li><strong>&lt;a&gt;:</strong> A link to another page</li>
          <li><strong>&lt;ul&gt;:</strong> An unordered list</li>
          <li><strong>&lt;ol&gt;:</strong> An ordered list</li>
          <li><strong>&lt;img&gt;:</strong> An image element</li>
          <li><strong>&lt;table&gt;:</strong> A table for displaying data</li>
          <li><strong>&lt;div&gt;:</strong> A division or section in a document</li>
          <li><strong>&lt;span&gt;:</strong> A span of text for styling</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Attributes</h3>
        <p className="text-gray-600 mb-4">HTML elements can have attributes that provide additional information about the element. For example, the <code>href</code> attribute in an anchor tag specifies the URL of the page the link goes to. Here are some common attributes:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>href:</strong> Specifies the URL for a link.</li>
          <li><strong>src:</strong> Specifies the source of an image.</li>
          <li><strong>alt:</strong> Provides alternative text for an image.</li>
          <li><strong>class:</strong> Specifies one or more class names for an element.</li>
          <li><strong>id:</strong> Specifies a unique id for an element.</li>
          <li><strong>style:</strong> Specifies inline CSS styles for an element.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Headings</h3>
        <p className="text-gray-600 mb-4">Headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. They are used to create a hierarchy of content. For example:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            {`<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>`}
          </code>
        </pre>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Forms and Input Elements</h3>
        <p className="text-gray-600 mb-4">Forms are a crucial part of HTML, allowing users to submit data to a server. Here’s an example of a simple form:</p>
        <pre className="bg-gray-100 p-4 rounded">
          <code>
            {`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <input type="submit" value="Submit">
</form>`}
          </code>
        </pre>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Paragraphs</h3>
        <p className="text-gray-600 mb-4">Paragraphs are defined with the <code>&lt;p&gt;</code> tag. They help in organizing content into readable sections.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Styles</h3>
        <p className="text-gray-600 mb-4">You can apply styles to HTML elements using CSS. For example, you can change the color, font, and layout of elements.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Text Formatting</h3>
        <p className="text-gray-600 mb-4">HTML provides several tags for formatting text, such as <code>&lt;strong&gt;</code> for bold text and <code>&lt;em&gt;</code> for italic text.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Quotations and Citations</h3>
        <p className="text-gray-600 mb-4">Use the <code>&lt;blockquote&gt;</code> tag for long quotations and <code>&lt;cite&gt;</code> for citations.</p>
        
        <h3 className="text-2xl font-semibold mt-6">HTML Comments</h3>
        <p className="text-gray-600 mb-4">Comments in HTML are added using the following syntax: <code>&lt;!-- This is a comment --&gt;</code>. They are not displayed in the browser.</p>
        
        <h3 className="text-2xl font-semibold mt-6">Conclusion</h3>
        <p className="text-gray-600 mb-4">Understanding HTML is essential for web development. It forms the backbone of web pages and is the first step in learning how to create websites.</p>
      </div>
    );
  };
  
  export default HTMLBasics;
  