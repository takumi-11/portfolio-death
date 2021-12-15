import React, { FC, createContext, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import DeathTime from '../components/DeathTime'
import Countdown from 'react-countdown'

export const Context = createContext("");

const FirstPage: FC = () => {
    const [birthday, setBirthday] = useState(String)
    const [gender, setGender] = useState()

    const registerGender = (e: any) => {
        setGender(e.target.value)
    }

    const registerBirthday = (e: any) => {
        setBirthday(e.target.value)
    }

    const deathTime = () => {
        console.log(birthday)
    }

    return (
        <>
            <Head>
                <title>生き物はいずれ死にます</title>
            </Head>

            <div className="flex justify-center items-center flex-col min-h-screen font-serif">
                <p className=' text-gray-700 mb-14 text-md underline'>
                    あなたの残り生きられる時間を知ることができます
                </p>
                <form className="grid grid-cols-2 gap-6 m-16">
                    <label className="block">
                        <span className="text-gray-700 shadow-xl">誕生日</span>
                        <input
                            className="mt-1 mb-36 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                            placeholder="2000/2/2"
                            onChange={registerBirthday}
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">性別</span>
                        <select
                            className="mt-1 mb-36 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                            onChange={registerGender}
                        >
                            <option value={1}>男</option>
                            <option value={2}>女</option>
                        </select>
                    </label>
                </form>
                <button
                    className='text-gray-700 rounded-md underline hover:bg-slate-300'
                    onClick={deathTime}
                >
                    <Link href="/time">残り時間を確認</Link>
                </button>
                <DeathTime birthday={birthday} gender={gender} />
            </div>

        </>
    )
}

export default FirstPage