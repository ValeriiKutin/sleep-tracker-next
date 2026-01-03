import { currentUser } from "@clerk/nextjs/server"
import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser(); // отримуємо поточного авторизованого юзера з clerk
    console.log("user: ", user);

    if (!user) {// якщо юзера немає то повертаємо null
        return null;
    }

    // шукаємо в БД в таблиці user користувача, у якого clerckUserId буде таким, як у авторизованого користувача
    // чи є в моїй БД користувач, який відповідає цьому Clerk-користувачу?
    const loggedInUser = await db.user.findUnique({
        where: {
            clerckUserId: user.id,
        },
    });

    // якщо знайшло в БД такого користувача то повертаємо його і далі код не працює
    if (loggedInUser) {
        return loggedInUser;
    }

    // якщо в БД в таблиці user не знайдено поточного авторизованого користувача, то створюємо нового в таблиці user
    const newUser = await db.user.create({
        data: {
            clerckUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    // і повертаємо цього нового користувача
    return newUser;
}