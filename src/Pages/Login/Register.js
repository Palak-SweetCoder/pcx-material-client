import React from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    let signInError;

    if (gLoading || loading || updating) {
        return (
            <div className="text-center p-20">
                <button className="btn loading text-white btn-secondary">
                    loading...
                </button>
            </div>
        );
    }

    if (gError || error || updateError) {
        signInError = (
            <p className="text-red-500 p-3">
                {gError?.message || error?.message || updateError?.message}
            </p>
        );
    }

    if (gUser || user) {
        // console.log(gUser, user)
    }

    const onSubmit = async (data) => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data?.name });
        toast.success('Registration successful!!!');
        navigate('/');
    };

    return (
        <div className="flex h-screen justify-center items-center p-4 lg:p-0 mb-20">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-primary text-4xl text-center font-bold">
                        PLEASE REGISTER
                    </h2>

                    {/* -------------------------hook form start---------------------- */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -------------------------daisy form start---------------------- */}

                        {/* -------------------------NAME FIELD START---------------------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {/* -------------------------NAME FIELD END---------------------- */}

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
                                Please login.
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

export default Register;
