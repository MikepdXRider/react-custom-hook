import { useState } from "react";

export default function useTimeTravel(){
    const [timeTraveler, setTimeTraveler] = useState({
        dates: [],
        index: 0,
        feedback: ''
    })

    const {dates, index, feedback} = timeTraveler;

    function save(newDate){
        if(dates.length){
            setTimeTraveler((prevState) => {
                const currDate = [...prevState.dates]
                currDate.splice(prevState.index, 0, newDate);
                return {
                    ...prevState,
                    dates: currDate,
                    feedback: index === 0 ? '' : 'Be careful adding events to the middle of an existing timeline!'
                }
            })
        } else {
            setTimeTraveler((prevState) => {
                return {
                    ...prevState,
                    dates: [newDate],
                    feedback: ''
                }
            })
        }
    }

    function undo(){
        if (!dates.length || dates.length - index <= 1) {
            setTimeTraveler((prevState) => {
                return {
                    ...prevState,
                    feedback: 'There\'s no past to revisit.'
                }
            })
        } else {
            setTimeTraveler((prevState) => {
                return {
                    ...prevState,
                    feedback: '',
                    index: prevState.index + 1
                }
            })
        }
    }

    
    function redo(){
        if (!dates.length || index === 0) {
            setTimeTraveler((prevState) => {
                return {
                    ...prevState,
                    feedback: 'There\'s no future to revisit.'
                }
            })
        } else {
            setTimeTraveler((prevState) => {
                return {
                    ...prevState,
                    feedback: '',
                    index: prevState.index - 1
                }
            })
        }

    }

    return [dates[index] || '', feedback, save, undo, redo];
}