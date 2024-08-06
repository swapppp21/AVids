import { Account, Avatars, Client, ID,Databases } from 'react-native-appwrite';
export const config={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform:'com.jsm.AVids',
    projectId:'66b132ec00312a566554',
    databaseId:'66b134c500356b8bd13c',
    userCollectionId:'66b134f5002f37f7d6c6',
    videoCollectionId:'66b1352a00290a7146c1',
    storageId:'66b13667001bf9b44b8a'

}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);
const avatars= new Avatars(client);
const databases= new Databases(client);

export const createUser= async (email, password, username) => {
    try {
        const newAccount =await account.create(
            ID.unique(),
            email,
            password,
            username

        )
        if(!newAccount)throw Error;
        const avatarUrl= avatars.getInitials(username)

        await signIn(email, password);
        const newUser= await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),{
                accountId: newAccount.$id,
            email,
            username,avatar: avatarUrl

            }
            
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}
export async function signIn(email, password){
    try {
        const session=await account.createEmailSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
        
    }
}