export function ApplyingAnimation(element : any , max : number , min : number){
    let GetRandomInterval = (max : number , min : number) => {
        return Math.floor(Math.random() * ( max  - min ) + min) 
    }

    let animate = () =>{
        element.classList.add("animate-spin")
        let animationDuration = GetRandomInterval(1000 , 5000)
        ScheduleNextAnimation()
        setTimeout(()=>{
            element.classList.remove("animate-spin")
        },animationDuration)
    }

    let ScheduleNextAnimation = () => {
        let NextInterval = GetRandomInterval(max , min)
        setTimeout(()=>{
            animate()
        },NextInterval)
    }
    ScheduleNextAnimation()
}