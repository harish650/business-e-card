import React, { Component } from "react";
import RichTextEditor, { stateToHTML } from "react-rte";
// import ReactHtmlParser from 'react-html-parser';
// import { stateToHTML } from "draft-js-export-html";
import "./template_details_form.css"
let data=[{value:""}];
class template_details_form_textarea extends Component {
  state = {
    value: RichTextEditor.createEmptyValue()
  };
// data.value=this.state.value.toString("html");

  sendatarte=()=>{
     fetch("/Template_details_rte_hlp",{method:"POST",
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify({ title:this.state.value.toString("html") })}).then(res=>res.json()).then(res=>console.log(res.text))
            console.log(this.state.value.toString("html"));
  }
  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString("html"));

      // handleSubmit = () => {
      const { editorState } = this.props;
      // For testing purposes
      console.log(stateToHTML(editorState.getCurrentContent()));
      // }
      console.log(this.state)
    }
  };

  render() {
    const { editorState } = this.props;
    // console.log("this.props:", this.props)
    // let html = stateToHTML(this.state.value);
    return (
      <div>
        <RichTextEditor className="rteboutus" value={this.state.value} onChange={this.onChange} />
        {/* {this.state.value.toString("html")} */}
        <br />
        <br />
        {/* ReactHtmlParser(this.state.value.toString("html")) */}
        {/*html*/}
        {/* stateToHTML(editorState.getCurrentContent()) */}
        <button variant="contained" onClick={this.sendatarte} submitAction = "pri">upload the content</button>
      </div>
    );
  }
}

export default template_details_form_textarea;
