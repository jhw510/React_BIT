import React,{Component} from "react";
import Navigator from  "../../components/common/Navigator"
import AdvancedCounter from '../../components/fp/AdvancedCounter'
class HomePage extends Component<any, any>{

    public render() {
        return <div>
    <AdvancedCounter/>
        </div>
    }
}
export default HomePage