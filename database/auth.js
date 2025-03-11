import supabase from './supabase';

// Example of sign-up logic
export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
  } else {
    console.log('User signed up:', user);
  }
};

export const LogIn = async (email, password) => {
    const {user, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        console.error(error.message);
    } else {
        console.log('User logged in:', user);
    }
}