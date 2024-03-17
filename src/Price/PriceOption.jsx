import SinglePrice from "../SinglePrice/SinglePrice";


const PriceOption = () => {

    const priceOption=[
       {
        "id": 1,
        "name": "Basic Membership",
        "features": [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access",
            "Personalized fitness assessment"
          ],
          "price": 29.99
       },

       {
        "id": 2,
        "name": "Standard Membership",
        "features": [
          "Access to all Basic Membership features",
          "Group fitness classes (limited)",
          "Sauna and steam room access"
        ],
        "price": 49.99
      },
      {
        "id": 3,
        "name": "Premium Membership",
        "features": [
          "Access to all Standard Membership features",
          "Unlimited group fitness classes",
          "One-on-one personal training session per month",
          "Towel service"
        ],
        "price": 79.99
      }

    ]

    return (
        <div className="m-12">
           
         <div className="grid md:grid-cols-3 gap-3">  
             {
                priceOption.map(option=><SinglePrice key={option.id} option={option}> </SinglePrice>)
            }</div>
        </div>
    );
};

export default PriceOption;