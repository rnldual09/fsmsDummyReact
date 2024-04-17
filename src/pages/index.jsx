import { useRouter } from "next/router";
import { AXIOS } from "@/util/axios";
import { TESTURL } from "@/util/url";

function Index() {

    const connectionTest = async () => {
        const data = {'id':'rnldual09'};
        const response = await AXIOS(TESTURL, data, 'POST');
        console.log(response.data);
    };

    return (
        <div style={{textAlign:'center'}}>
            <button
                onClick={connectionTest}
            >
                통신테스트
            </button>
        </div>
    )
}

export default Index;

