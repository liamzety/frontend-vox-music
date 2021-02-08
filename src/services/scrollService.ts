export const scrollService = {
  handleScroll,
  checkOverflow,
  handleScrollVertical,
};

function handleScroll(ref: any) {
  ref.current.scrollIntoView({
    behavior: 'smooth',
  });
}
function checkOverflow(ref: any) {
  // console.log('ref.current.offsetWidth', ref.current.offsetWidth);
  // console.log('---------IS LESS THAN-----------');
  // console.log('ref.current.scrollWidth', ref.current.scrollWidth);
  // console.log('---------------ANSWER----------------');
  // console.log(ref.current.offsetWidth < ref.current.scrollWidth);
  // console.log('    ');
  // console.log('    ');
  // console.log('    ');
  // console.log(' ref.current.offsetHeight', ref.current.offsetHeight);
  // console.log('---------IS LESS THAN-----------');
  // console.log('ref.current.scrollHeight', ref.current.scrollHeight);
  // console.log('---------------ANSWER----------------');
  // console.log(ref.current.offsetHeight < ref.current.scrollHeight);
  // console.log('--------------------------------------------');
  return (
    ref.current.offsetWidth < ref.current.scrollWidth ||
    ref.current.offsetHeight < ref.current.scrollHeight
  );
}

function handleScrollVertical(left: boolean, ref: any) {
  const scrollMax = ref.current.scrollWidth;
  const scrollMin = 0;

  if (left) {
    Math.max(
      (ref.current.scrollLeft += ref.current.offsetWidth - 80),
      scrollMax
    );

    if (ref.current.scrollLeft + ref.current.offsetWidth + 10 >= scrollMax) {
      ref.current.scrollLeft = 0;
    }
  } else {
    Math.min(
      (ref.current.scrollLeft -= ref.current.offsetWidth - 80),
      scrollMin
    );

    if (ref.current.scrollLeft === 0) {
      ref.current.scrollLeft = scrollMax;
    }
  }
}
