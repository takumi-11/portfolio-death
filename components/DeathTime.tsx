import React, { FC } from 'react'

type Props = {
    birthday: string;
    gender: string | undefined;
}

const DeathTime: FC<Props> = ({ birthday, gender }) => {
    // 起点となる日時のタイムスタンプを取得
    const time = new Date(birthday).getTime();

    // 現在までの経過時間をミリ秒で取得
    const elapsedTime = Date.now() - time;

    return (
        <div>
            
        </div>
    )
}

export default DeathTime
