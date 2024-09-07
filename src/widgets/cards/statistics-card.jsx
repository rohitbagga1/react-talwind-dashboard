import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ value }) {
  return (
    <Card className="border border-blue-gray-100 shadow-sm">
      {/* <CardHeader
        variant="gradient"
        color={color}
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
      >
        {icon}
      </CardHeader> */}
      <CardBody className="p-4 text-center">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {value.title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value.description}
        </Typography>
        <br></br>
        <b>Reviewer Details:</b>
        <Typography variant="h7" color="blue-gray">
          {value.userId.userName}
        </Typography>
        <Typography variant="h7" color="blue-gray">
          {value.userId.email}
        </Typography>
      </CardBody>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
