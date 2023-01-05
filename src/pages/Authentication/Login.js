import React, { useContext, useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';



const Login = () => {
    useTitle('login')
    const {signIn, signInWithGoogle}=useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin=(data)=>{
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                if (data.option) {
                    handleMarkSeller(data.email)
                }
                navigate(from, {replace: true});
            })
            .catch(error => {
                setLoginError(error.message);
            });
    }

    const handleMarkSeller=(email)=>{
        fetch(`http://localhost:5000/users/seller/${email}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{})
    }

    const handleGoogleSignIn=()=>{
        setLoginError('');
        signInWithGoogle()
        .then(result => {
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            setLoginError(error.message);
        });

    }
    return (
        <div className='h-[800px] flex justify-center items-center dark:bg-black'>
            <div className='w-96 p-7 dark:text-gray-300'>
                <h2 className='text-4xl mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            })}
                            className="input input-bordered w-full max-w-xs dark:text-black" />
                        {errors.password && <p className='text-red-600 my-1'>{errors.password?.message}</p>}
                    </div>
                    <div className="w-full max-w-xs  flex items-center py-3 mt-3">
                        <input type="checkbox"  {...register("option")} className="" /> 
                        <span className="ml-2 label-text dark:text-gray-300">Login as seller</span>
                    </div>
                    <input className='border border-orange-500 py-3 rounded-md hover:text-black text-white bg-orange-500 font-medium w-full my-3 cursor-pointer' value="LOGIN" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <Link to='/forget-password' className="hover:underline"> <span className="label-text dark:text-gray-300">Forget Password?</span></Link>
                <p className='my-3'>New Here ? <Link className='hover:underline' to="/register">Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='border border-orange-500 hover:text-orange-500 py-3 rounded-md font-medium w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;