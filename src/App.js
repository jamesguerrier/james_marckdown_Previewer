import { useState } from 'react'
import { marked } from 'marked'
import './App.css';


function Navbar({head, name}){
  return(
    <div id="container">
      <div className="nav-editor">
        <i className="fab fa-free-code-camp" />
        <span className="title">{head}</span>
      </div>
      <div className="nav-previewer">
        <span>{name}</span>
      </div>
    </div>
  )
}

const Editor = ({text, handleChange}) => {
  return(
    <div className='border'>
    <Navbar head="Editor" name="Macked"/>
      <textarea id="editor" 
      onChange={handleChange} 
      value={text} 
      type="text" 
      cols="75" 
      rows="15" 
      className='markArea' 
      >
        

      </textarea>
    </div>
  )

}




function App() {
  const [text, setText] = useState(
    `
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:  

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
  
![React Logo w/ Text](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:569:275616)
  `
  );

  const handleChange=(event)=>{
    setText(event.target.value)
  }
  
  marked.setOptions({
    breaks: true })

  return (
    <div className="App">
      <Editor 
      text={text} 
      handleChange={handleChange} 
      />
     <div className='border-preview'>
      <Navbar head="Previewer" name="previewer"/>
      <div id="preview" dangerouslySetInnerHTML= {{__html: marked(text),}}>
      
     </div>
    </div>
     
    </div>
  );
}

export default App;
