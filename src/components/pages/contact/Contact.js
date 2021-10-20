import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import LocationShared from "../../../sharedComponent/LocationShared";

import Content from "./Content";



const schema = yup.object().shape({
    name: yup.string().required("Can't be empty"),
    email:yup.string()
    .required('Email is invalid'),
   
    phone: yup.number().required("Can't be empty").positive().integer().min(8, 'Phone is wrong'),
})
// let schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
// });
const Contact = () => {
    // const {register, handleSubmit, formState: { errors }, values} = useForm({
    //     resolver: yupResolver(schema),
    
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(schema),
    })

    const { errors } = formState;
    
    
   
    function onSubmit(data, e) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        alert('SUCCESS!! :-)\n\n' );
        e.target.reset();
        return false;
       
    }
  
    
    // const onSubmit = data => console.log(data);


    return (
        <div className="contact">
        <div className="contact__content">
        <div className ="contact__content__contactUs">
            <h1>Contact Us</h1>
            <p>Ready to take the next level? Let's talk about your project or idea and find out how we can help youe business grow. If you are looking for unique digital experiences that's relatable to your user, drop us a line</p>
        </div>
        <div className="contact__content__inputs">

        <form onSubmit={handleSubmit(onSubmit)}>
           
          
                    <div >
{/*                     
                 <input name={input.name} type={input.type} placeholder={input.placeholder}   {...register(input.name, {required:true})} /><br />
                 {errors.name && (
        <span role="alert">
          This field is requireds
        </span>
        )} */}
                 {/* {errors.name && <p>{errors.name}</p>} */}

                 {/* <ErrorMessage errors={errors} name="singleErrorInput" /> 
                  <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      /> */}
      {/* ref={register({
    required: "Enter your e-mail",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Enter a valid e-mail address",
    },
   })} */}
                 <input name='name' type='text' placeholder='Name'  {...register('name')}  pattern="[A-Za-z]{1,20}" autocomplete="off"/><br />
                 <div className="invalid-feedback">{errors.name?.message}</div>
                 <input name='email' type="email" {...register('email')} placeholder="Email Adress" autocomplete="off" /><br />
                 <div className="invalid-feedback">{errors.email?.message}</div>
                <input name="phone" type='number' placeholder="Phone"  {...register('phone')} autocomplete="off" /><br /> 
                <div className="invalid-feedback">{errors.phone?.message}</div>
                </div>
                
         
           
 
   
            <textarea placeholder="Your Message" name="" rows="4" cols="50"></textarea><br />
               
                <button type="submit" className="btn" >Submit</button>
            </form>
        </div>
        </div>
      <div className="deal">
            <LocationShared />
        </div>
        </div>

      
    )
}

export default Contact;