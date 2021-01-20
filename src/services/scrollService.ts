
export const scrollService = {
    handleScroll
}


function handleScroll(ref:any) {
            ref.current.scrollIntoView({
            behavior: 'smooth',
          });

}