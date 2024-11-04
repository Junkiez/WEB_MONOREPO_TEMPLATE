import useStoreSync from "../../state/counter";

const About = () => {
    const {storage, mutations} = useStoreSync();
    return (
        <>
            <p>{storage.counterOne}</p>
            <button onClick={()=>mutations.increment("counterOne",1)}>counterOne</button>
            <p>{storage.counterTwo}</p>
            <button onClick={()=>mutations.increment("counterTwo",1)}>counterTwo</button>
        </>
    )
}

export default About
