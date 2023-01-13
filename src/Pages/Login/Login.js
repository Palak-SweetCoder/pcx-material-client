import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let signInError;
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (gUser || user) {
            navigate(from, { replace: true });
        }
    }, [gUser, user, from, navigate]);

    if (gLoading || loading) {
        return (
            <div className="text-center p-20">
                <button className="btn loading text-white btn-secondary">
                    loading...
                </button>
            </div>
        );
    }

    if (gError || error) {
        signInError = (
            <p className="text-red-500 p-3">
                {gError?.message || error?.message}
            </p>
        );
    }

    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        toast.success('Login success!!!');
    };

    return (
        <div className="flex h-screen justify-center items-center p-4 lg:p-0 mb-20">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-primary text-4xl text-center font-bold">
                        PLEASE LOGIN
                    </h2>

                    {/* -------------------------hook form start---------------------- */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -------------------------daisy form start---------------------- */}

                        {/* -------------------------email field start---------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === 'pattern' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {/* -------------------------email field end---------------------- */}

                        {/* -------------------------password field start---------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            'Password must be 6 characters or longer',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {/* -------------------------password field end---------------------- */}

                        {/* -------------------------daisy form end---------------------- */}

                        {signInError}

                        <input
                            className="btn w-full max-w-xs text-white btn-secondary"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    {/* -------------------------hook form end---------------------- */}

                    <p>
                        <small>
                            New to PCX material?{' '}
                            <Link to="/register" className="text-primary">
                                Create New Account.
                            </Link>
                        </small>
                    </p>

                    <div className="divider">OR</div>
                    <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => signInWithGoogle()}
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
