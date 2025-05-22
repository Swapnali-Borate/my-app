import React, { useState } from 'react'
import Square from './Square'

const Game = () => {
    const [num, setNum] = useState([...Array(9).fill(null)])
    const [cond, setCond] = useState(true)
    // console.log(num)

    const checkWinner = () => {  
        let winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winner.length; i++) {
            let [a, b, c] = winner[i];
            if (num[a] != null && num[a] === num[b] && num[a] === num[c]) {
                return num[a]
            }
        }
        return false
    }
    let result = checkWinner()

    const handleClick = (index) => {
        // eka square mdhe X asel ani tyach square vr double click kel ki O hot hot tr te hou nye mhnun he if use kel ahe.
        if (num[index] != null) {
            return;
        }
        let copyArray = [...num];
        copyArray[index] = cond ? "X" : "O"
        setNum(copyArray)
        console.log(copyArray);
        setCond(!cond)
    }
    const play = () => {
        setNum([...Array(9).fill(null)])
    }
    return (
        <div>

            {
                result ?
                    <div>
                        <h1 className='text-4xl font-bold'> {result} : You Winner</h1>
                        <button onClick={play} className='bg-red-800 text-white p-2 font-bold rounded-2xl mt-4'>Play Again</button>
                    </div> :
                    <>

                        <div>
                            <h1 className='text-2xl font-bold'>Tic Tac Toe</h1>
                            <h1 className='text-2xl font-bold'>{cond ? "X" : "O"} : Your Turn</h1>
                        </div>

                        <div className='flex w-full mx-auto justify-center mt-10'>
                            <Square onClick={() => handleClick(0)} value={num[0]} />
                            <Square onClick={() => handleClick(1)} value={num[1]} />
                            <Square onClick={() => handleClick(2)} value={num[2]} />
                        </div>
                        <div className='flex w-full mx-auto justify-center'>
                            <Square onClick={() => handleClick(3)} value={num[3]} />
                            <Square onClick={() => handleClick(4)} value={num[4]} />
                            <Square onClick={() => handleClick(5)} value={num[5]} />
                        </div>
                        <div className='flex w-full mx-auto justify-center'>
                            <Square onClick={() => handleClick(6)} value={num[6]} />
                            <Square onClick={() => handleClick(7)} value={num[7]} />
                            <Square onClick={() => handleClick(8)} value={num[8]} />
                        </div>
                    </>
            }

        </div>
    )
}

export default Game
