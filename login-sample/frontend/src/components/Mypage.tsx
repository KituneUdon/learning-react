import React, { useEffect, useState } from 'react';

import mypage from '../apis/mypage';

const Mypage = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    mypage().then((res) => setText(res));
  }, [setText])

  return (
    <div>
      {text}
    </div>
  )
}

export default Mypage
