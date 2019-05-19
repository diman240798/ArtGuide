import React from 'react'
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class AttractionFullInfo extends React.Component {

    render() {

        var card =
            <React.Fragment>
                <Card>
                    <Image src="images/museum_kraevedeniya_big.jpg" thumbnail/>
                    <div className="padding">
                        <Card.Text>dsjnflsdkfklsdmfkldsfklsdnfklsdlkfdfadsfadgdfgdfsgdsfgsdfgdfgdsfgdfsgsddfgdfsgdfgdfsgsdfgdsfvreafsgfsdgrvwagrfgafdgsdfgfdsgdfsgsdfgsfggsfdgsdfgfd</Card.Text>
                    </div>


                </Card>
            </React.Fragment>

        return card;
    }
}

export default AttractionFullInfo;