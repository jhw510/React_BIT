//ChatBot.js
import React,{Component} from 'react';
import ChatBot from 'react-simple-chatbot';
class Chat extends Component{
    // React의 props와 state설정
   // constructor(props) {
      //  super(props);
      //  this.state = {
           // name:'',
       // };
   // }
    render() {
        return (
            <div>
                {/* <ChatBot> => 챗봇이 생성된다.*/}
                <ChatBot
                    // steps 챗봇의 시나리오를 작성한다.
                    steps={[
                        {
                            id: '1',
                            message: '이름을 알려주세요.',
                            // trigger는 다음 이동해야 할 시나리오를 가져온다.
                            trigger: 'name',
                        },
                        {
                            id: 'name',
                            // user에 true넣으면 값을 입력 된다.
                            user: true,
                            validator: (value) => {
                                if (value === null) {
                                    // 아무 입력 값이 없는 경우 보여준다.
                                    return '이름이 없습니다. 다시입력해주세요.';
                                }
                                // name에 들어온 입력된 값을 받아 준다.

                               // @ts-ignore
                               // this.state.name = value
                                // this.state.name에 값이 저장되어 있는지 확인

                               // alert(this.state.name)
                                return true;
                            },
                            trigger: '2',
                        },
                        {
                            id: '2',
                            message: '안녕하세요. {previousValue}님, 만나서 반갑습니다.',
                            end: true,
                        },
                    ]}
                />
            </div>
        );
    }
}
export default Chat;