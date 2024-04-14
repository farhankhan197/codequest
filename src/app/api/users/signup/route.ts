import { connectDB } from "@/db/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";
import { Octokit } from "@octokit/rest";

connectDB()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, username, password } = reqBody

        console.log(reqBody);

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: 'user already exists' }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        console.log(savedUser);

        const octokit = new Octokit({
            auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
        });

        await octokit.repos.createOrUpdateFileContents({
            owner: 'farhankhan197',
            repo: 'codequest-solutions',
            path: `${username}/README.md`, // Create a README file in the user's folder
            message: `Create folder for ${username}`,
            content: '',
            committer: {
                name: username,
                email: email
            }
        });

        await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id })

        return NextResponse.json({
            message: "user registration successful",
            success: true,
            savedUser
        })

    } catch (error:any) {
        console.error('Error during user registration:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
