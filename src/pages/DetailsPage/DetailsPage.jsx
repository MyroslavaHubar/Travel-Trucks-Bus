import { useDispatch } from "react-redux";
import Section from "../../components/Section/Section";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTruckById } from "../../redux/allTrucks/operations";
const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTruckById(id));
  }, [dispatch, id]);

  return (
    <Section>
      <TruckDetails />
    </Section>
  );
};

export default DetailsPage;
