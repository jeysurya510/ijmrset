import Logo from '../assets/IJMRSET-Logo.png';

export default function Footer() {
  return (
    <div className="footer min-h-[400px] py-5 lg:py-0 w-full">
      <div className="flex flex-wrap justify-center h-full w-full px-10">
        <div className="lg:w-[40%] flex flex-col gap-5 justify-center items-center">
          <img src={Logo} alt="logo" className="h-28 p-4 rounded-full    bg-white " />
          <h1 className="font-lora lg:text-[18px] text-[15px] text-center font-medium text-white">
            International Journal of Multidisciplinary Research in <br />
            <span className="italic">Science, Engineering and Technology</span>
          </h1>
          <p className="italic font-Inter text-[12px] text-center text-white">
            IJMRSET is a peer-reviewed journal with a 7.54 Impact Factor, publishing research in
            Science, Engineering, Technology, and Management. It ensures fast review and online
            publication.
          </p>
        </div>
        <div className="lg:w-[30%] flex flex-col gap-5 justify-center items-center lg:py-24">
          <h1 className="font-lora lg:text-[18px] text-[15px] text-center font-bold mb-auto text-white">
            OUR LINKS
          </h1>
          <ul className="flex flex-col justify-center items-center gap-4 text-white  font-Inter lg:text-[18px] text-[15px]">
            <li>Home</li>
            <li>Editor Board</li>
            <li>Author</li>
            <li> Issues</li>
            <li>Reviwer</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="lg:w-[30%] flex flex-col gap-5 justify-center items-center lg:py-24  py-10">
          <h1 className="font-lora text-[18px] text-center font-bold mb-auto  text-white underline underline-offset-2 lg:block hidden">
            Contact
          </h1>
          <p className="flex flex-col justify-center items-center gap-4 text-white  font-Inter lg:text-[18px] text-[15px]">
            Dr.R.Sugumar <br />
            The Editor in Chief <br />
            12/41, Venkatesan Street, T.Nagar,
            <br /> Chennai-600017,
            <br />
            Tamilnadu, India
            <br />
            Email: ijmrset@gmail.com.
            <br />
            Mobile : +91 9940572462
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
