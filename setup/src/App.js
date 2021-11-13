import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  // const [markdown, setMarkdown] = useState("## markdown preview");
  const para = `# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

\`\`\`bash
pip install foobar
\`\`\`

## Usage

\`\`\`python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

  `;

   const [markdown, setMarkdown] = useState(para);
  return <main>
    <h1 className="header">Make Readme here</h1>
    <h2 className="subheader-left">MarkDown Input (editable) </h2>
    
     <h2 className="subheader-right">Rendered </h2>
    <section className="markdown">
      <textarea className="input" spellcheck="false" value={markdown} onChange={(e) => {
         setMarkdown(e.target.value)        
      }}></textarea>
      <article className="result">
        <ReactMarkdown>
        {markdown}
        </ReactMarkdown>
      </article>
      
      
    </section>
   <button className="btn"  onClick={() =>  navigator.clipboard.writeText(markdown)}>copy</button> 
  </main>
}

export default App
