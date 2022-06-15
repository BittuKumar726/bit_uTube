import { Card, Row, Col, Tag } from "antd";
const { Meta } = Card;
const Video = (props) => {
    const { data } = props;
    return (
        <Card>
            <Row gutter={16}>
                {data.length > 0 && data.map((item, idx) => {
                    const videoId = getId(item?.link);
                    return (
                        <Col key={idx} span={24 / data.length}>
                            <Card
                                hoverable
                                style={{ width: '90%' }}
                                cover={<iframe
                                    width="90%"
                                    height="400px"
                                    src={`https://www.youtube.com/embed?v=${videoId}`}
                                    style={{ border: 0 }}
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                />}
                            >
                                <Meta title={item?.title} description={item?.description} style={{ marginBottom: '1rem' }} />
                                {" "}
                                <Tag color="red">{item?.tags}</Tag>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Card>

    )
}
const getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : null;
}
export default Video;