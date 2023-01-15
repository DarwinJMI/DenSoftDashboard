import { Row, Col, Card, Table, Button, Avatar, Typography } from "antd";
import face2 from "../assets/images/face-2.jpg";
import { FileAddFilled } from "@ant-design/icons";
const { Title } = Typography;

// table code start
const columns = [
  {
    title: "Paciente",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "Saldo",
    dataIndex: "saldo",
    key: "saldo",
  },

  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Dirección",
    key: "address",
    dataIndex: "address",
  },
  {
    title: "Próxima cita",
    key: "date",
    dataIndex: "date",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}></Avatar>
          <div className="avatar-info">
            <Title level={5}>Darwin Josué Mairena</Title>
            <p>megadethdar@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    saldo: (
      <>
        <div className="author-info">
          <Title level={5}>C$ 5000</Title>
          <p>Crédito</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    address: (
      <>
        <div className="ant-employed">
          <span>Rivas</span>
        </div>
      </>
    ),

    date: (
      <>
        <div className="ant-employed">
          <span>12/02/2022</span>
        </div>
      </>
    ),
  },
];

function Tables() {
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Pacientes">
              <Button
                style={{
                  width: "200px",
                  backgroundColor: "#319CF8",
                  color: "white",
                }}>
                {<FileAddFilled style={{ height: 30 }} />}
                Nuevo
              </Button>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
