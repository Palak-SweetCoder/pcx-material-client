import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <div className="flex h-screen justify-center items-center p-4 lg:p-0 mb-20">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-primary text-4xl text-center font-bold">
                        PLEASE REGISTER
                    </h2>

                    {/* -------------------------hook form start---------------------- */}
                    <form>
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

                        {/* ---------------confirm password field start---------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Confirm Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Enter confirm password',
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
                        {/* ---------------confirm password field end---------------- */}

                        {/* -------------------------daisy form end---------------------- */}

                        {/* {signInError} */}

                        <input
                            className="btn w-full max-w-xs text-white btn-secondary"
                            type="submit"
                            value="Register"
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
                        <br />
                        <small>
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary">
                                please login.
                            </Link>
                        </small>
                    </p>

                    <div className="divider">OR</div>
                    <button
                        className="btn btn-outline btn-secondary"
                        // onClick={() => signInWithGoogle()}
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
