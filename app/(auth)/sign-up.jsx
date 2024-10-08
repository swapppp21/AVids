import React from 'react'
import { useState } from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'
//import {createUser} from '../lib/appwrite'
import { router } from 'expo-router'
const SignUp=()=>{

    const[form,setForm]= useState({
      username:'',
      email:'',
      password:''
    })

    const[isSubmitting, setSubmitting]= useState(false)
    const submit = async () => {
      setSubmitting(true);
      try {
        router.replace("/home")
       
      } catch (error) {
        // Handle submission errors here
        console.error('Submission error:', error);
      } finally {
        setSubmitting(false);
      }
    };
  
    return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full justify-center h-full px-4 my-6">
                <Image source={images.Logo}
                resizeMode='contain' className="w-[215px] h-[65px]"
                />
                <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                    Sign Up to AVids
                </Text>
                <FormField 
                title="Username"
                value={form.username}
                handleChangeText={(e)=>setForm({...form,username: e})}
                otherStyles="mt-10"
              
              />
              <FormField 
                title="Email"
                value={form.email}
                handleChangeText={(e)=>setForm({...form,email: e})}
                otherStyles="mt-7"
                keyboardType="email-address"
              
              />
              <FormField 
                title="Password"
                value={form.password}
                handleChangeText={(e)=>setForm({...form,password: e})}
                otherStyles="mt-7"
              />
              <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
              />
              <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
               Have an account already?
              </Text>
              <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
              </View>
            </View>
        </ScrollView>

      </SafeAreaView>
    )
  }


export default SignUp

















  // const submit=()=>{
      
    // }
    // const submit=async()=>{
    //   if (!form.username || !form.email || !form.password){
    //     Alert.alert('Error','Please fill in all the fields')
    //   }
    //   setSubmitting(true);
    //   try {
    //     const result = await createUser(form.email, form.password, form.username);
    //     // setUser(result);
    //     // setIsLogged(true);
        
    //     router.replace("/home")

    //   } catch (error) {
    //     Alert.alert('Error',error.message)
    //   }finally{
    //     setSubmitting(false)
    //   }
      
    // }
