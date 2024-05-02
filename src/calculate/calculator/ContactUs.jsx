import ques from "../../assets/Group.png";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import RoundedButton from "../../ui/RoundedButton";
function ContactUs() {
  return (
    <EqualHeightFlexContainer addedClass="bg-accentCyan/15 p-[4%] items-center">
      <div className="w-3/4 px-[5%] py-[10%]">
        <h2 className="text-accentCyan font-semibold text-6xl font-pally w-2/4">
          Do you still have Questions?
        </h2>
        <p className="text-neutral-800/80 text-xl font-normal w-3/4 py-6">
          If you have any other questions about calculating your Zakat or need
          extra support, get in touch to find out how else{" "}
          <strong>Zakat Foundation Bangladesh</strong> can help.
        </p>
        <RoundedButton>Contact Us</RoundedButton>
      </div>
      <div
        className="w-1/4 bg-fill bg-no-repeat bg-top rounded-md"
        style={{ backgroundImage: `url(${ques})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default ContactUs;
