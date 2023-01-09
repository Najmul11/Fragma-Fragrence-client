import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    useTitle('signup')
    const navigate=useNavigate()
    const {createUser, updateUserProfile, signInWithGoogle}=useContext(AuthContext)

    const [signUpError, setSignUPError] = useState('')
    
  
    const {register, handleSubmit, formState:{errors}} =useForm()


    const handleSignup=(data)=>{
       createUser(data.email, data.password)
       .then(res=>{
            toast.success('User Created Successfully.')
            const userInfo = {
                displayName: data.name
            }
            updateUserProfile(userInfo)
                .then(() => { 
                    if (data.option) {
                        const usage='seller'
                        saveUser(data.name, data.email,usage)
                    } else {
                        saveUser(data.name, data.email)
                    }
                    
                    
                })
                .catch(err => console.log(err));
       })
       .catch(error => {
        setSignUPError(error.message)
    });
    }


    // store user info in database
    const saveUser=(name, email, usage='user')=>{
        const user={name, email, usage}
        fetch('https://new-folder-najmul11.vercel.app/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{navigate('/')})
    }


    const handleGoogleSignIn=()=>{
        setSignUPError('');
        signInWithGoogle()
        .then(result => {
            const user= result.user;
            saveUser(user.displayName, user.email)
        })
        .catch(error => {
            setSignUPError(error.message);
        });

    }
    
    return (
        <div className='h-[800px] flex justify-center items-center dark:bg-black'>
            <div className='w-96 p-7 dark:text-gray-300'>
                <h2 className='text-4xl mb-5'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-gray-300">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs dark:text-black" />
                        {errors.name && <p className='text-red-600 my-1'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-gray-300">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs dark:text-black" />
                        {errors.email && <p className='text-red-600 my-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-gray-300">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs dark:text-black" />
                        {errors.password && <p className='text-red-600 my-1'>{errors.password?.message}</p>}
                    </div>
                    <div className="w-full max-w-xs  flex items-center py-3 mt-3">
                        <input type="checkbox"  {...register("option")} className="" /> 
                        <span className="ml-2 label-text dark:text-gray-300">Create account as seller</span>
                    </div>
                    <input className='border border-orange-500 py-3 rounded-md hover:text-black text-white bg-orange-500 font-medium w-full my-3 cursor-pointer' value="SIGN UP" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p className='my-3'>Already have an account ? <Link className='hover:underline' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='border border-orange-500 hover:text-orange-500 py-3 rounded-md font-medium w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;