React Class Components

   

   1. Component can be designed using Javascript class declaration or expression 



           class Login                    => declaration

           {

           }

           

           const Login = class        => expression

           {

           }



   2. To define component behaviour for JS class it must extend 

           a) React.Component (or)

           b) React.PureComponent 



       Syntax:

               class  Login  extends React.Component / React.PureComponent

               {



               }



        FAQ: What are pure & impure components?

        Ans:  Pure component returns the same functionality on every request. [cached]

                 Impure component changes on every request. [Re-renders]



   3. You have to call super constructor inside derived component constructor class. 



       Syntax:

               class Login extends React.Component

               {

                   constructor() {

                           super();

                   }

               }



   4. Class component must return JSX element using “render()” method. 



       Syntax:

             class Login extends React.Component

             {

                   constructor() {

                       super();

                   }

                   render(){

                        return (<div> </div>);

                   }

             }



   5. All JSX rules are same as you follow for function component.



   6. Data Binding, Style Binding & Class Binding  are same.

           

               { }            binding expression



   State in class component

   - Hooks are not allowed in class components.

   - You can’t use hooks as they are designed with functions & a function can’t be 

      class member. 

   - In React class component it comprises of built-in state. 

   - You can configure state while creating instance of component. 



               constructor()

               {

                   this.state = { key: value }

               }



   - State is object type with key and value collection.

   

             this.state = {

                   title : “Welcome”,

                   categories: [“All” , “Electronics”],

                   product: { id: 1, title: “TV” }

               }



   - You can access state by using “this.state.key”. 



   - Component provides a built-in setter to set values into state. 

           

               this.setState( { key : value } )



   - You can set state on mount or on any specific event. 

   

   - Component mount is defined using the methods



           a) componentWillMount()

           b) componentDidMount()



    Syntax:

           componentDidMount()

           {

               this.setState( { key: value } );

           }

Ex:

import React from "react";



export class DemoComponent extends React.Component

{

     constructor(){

         super();

         this.state = {

            title: 'Class Component',

            categories: ['All', 'Electronics', 'Fashion']

         }

     }



     componentDidMount(){

        this.setState({title: 'Welcome to React class components'})

     }



     render(){

         return(

            <div className="container-fluid">

                <h2> {this.state.title} </h2>

                <ol>

                    {

                        this.state.categories.map(category=><li key={category}>{category}</li>)

                    }

                </ol>

            </div>

         )

     }

}



   Event Binding

   - All synthetic events are same.

   - Event handler uses a class method. 

   - If event handler is using any state value then it must bind with current class memory.

   

   Syntax:

           constructor() {

                this.handleClick = this.handleClick.bind(this);

           }

   

   - You can register using “lazy” technique instead of configuring inside constructor.



           <button onClick={ this.handleClick.bind(this) } >



Ex:

import React from "react";



export class DemoComponent extends React.Component

{

     constructor(){

         super();

         this.state = {

             msg: ''

         }  

         this.handleInsertClick = this.handleInsertClick.bind(this);

     }



     handleSubmitClick(){

        alert('Submitted');

     }

     handleInsertClick(){

        this.setState({msg: 'Record Inserted'});

     }

     handleDeleteClick(){

        this.setState({msg: 'Record Deleted'});

     }

     handleUpdateClick(){

        this.setState({msg: 'Record Updated'});

     }



     render(){

         return(

            <div className="container-fluid">

               <button onClick={this.handleSubmitClick}>Submit</button>

               <button onClick={this.handleInsertClick}>Insert</button>

               <button onClick={this.handleDeleteClick.bind(this)}>Delete</button>

               <button onClick={()=>this.handleUpdateClick()} >Update</button>

               <p>{this.state.msg}</p>

            </div>

         )

     }

}



   API Requests

       - You can use XMLHttpRequest, Fetch or Axios.

       - API Interactions GET, POST, PUT, DELETE all are same. 

Ex:

import axios from "axios";

import React from "react";

import { data } from "react-router-dom";



export class DemoComponent extends React.Component

{

     constructor(){

         super();

         this.state = {

             data : {recipes:[]}

         }  

     }



     LoadRecipes(){

        axios.get(`https://dummyjson.com/recipes`)

        .then(response=>{

             this.setState({data: response.data});

        })

     }



     componentDidMount(){

         this.LoadRecipes();

     }

     



     render(){

         return(

            <div className="container-fluid">

               <ol>

                {

                    this.state.data.recipes.map(recipe=><li key={recipe.id}>{recipe.name}</li>)

                }

               </ol>

            </div>

         )

     }

}



   Forms & Validation

   - You can’t use useFormik hook but you can use <Formik> component. 

   - You can’t use any library that provides hooks. 



               <Formik>

               <Form>

               <Field>

               <ErrorMessage>



   - Validation can be defined using Yup. 



   Controlled Components

   - Class components have built-in props. 

   - “Props” is object type with key and value collection. 

   

   Syntax:

           render() {

               return(

                   <nav> 

                           { this.props.key } 

                   </nav>

                   )

           }



 Ex:

    Controlled-component/tool-box.jsx



import React from "react";





export class Toolbox extends React.Component

{

     constructor(){

         super();

     }

     render(){

        return(

            <nav className="d-flex justify-content-between bg-dark text-white p-2">

                <span className="bi bi-justify fw-bold fs-4"> {this.props.brand} </span>

                {

                    this.props.navItems.map(item=><span className="mx-5" key={item}>{item}</span>)

                }

            </nav>

        )

     }

}



import axios from "axios";

import React from "react";

import { data } from "react-router-dom";

import { Toolbox } from "../controlled-components/tool-box";



export class DemoComponent extends React.Component

{

     constructor(){

         super();

         this.state = {

             data : {recipes:[]}

         }  

     }



     LoadRecipes(){

        axios.get(`https://dummyjson.com/recipes`)

        .then(response=>{

             this.setState({data: response.data});

        })

     }



     componentDidMount(){

         this.LoadRecipes();

     }

     



     render(){

         return(

            <div className="container-fluid">

               <Toolbox brand='Amazon' navItems={['Home', 'Shop', 'Brands', 'About', 'Contact']} />

               <ol>

                {

                    this.state.data.recipes.map(recipe=><li key={recipe.id}>{recipe.name}</li>)

                }

               </ol>

            </div>

         )

     }

}
