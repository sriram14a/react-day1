
export function Pricecard() {

    const cardDetails = [{
        cardname: "FREE",
        price: "$0",
        duration: "/month",
        user: "✔ Single User",
        storage: "✔ 5GB Storage",
        publicProjects: "✔ Unlimited Public Projects",
        access: "✔ Community Access",
        privateProjects: "✘ Unlimited Private Projects",
        phoneSupport: "✘ Dedicated Phone Support",
        subdomain: "✘ Free Subdomain",
        reports: "✘ Monthly Status Reports"
    },
    {
        cardname: "PLUS",
        price: "$9",
        duration: "/month",
        user: "✔ 5 User",
        storage: "✔ 50GB Storage",
        publicProjects: "✔ Unlimited Public Projects",
        access: "✔ Community Access",
        privateProjects: "✔ Unlimited Private Projects",
        phoneSupport: "✔ Dedicated Phone Support",
        subdomain: "✔ Free Subdomain",
        reports: "✘ Monthly Status Reports"
    },
    {
        cardname: "PRO",
        price: "$49",
        duration: "/month",
        user: "✔ Unlimited User",
        storage: "✔ 150GB Storage",
        publicProjects: "✔ Unlimited Public Projects",
        access: "✔ Community Access",
        privateProjects: "✔ Unlimited Private Projects",
        phoneSupport: "✔ Dedicated Phone Support",
        subdomain: " Free Subdomain",
        reports: "✔ Monthly Status Reports"
    },
    ]

    return (

        <div className="card-container">
            {cardDetails.map((crd) =>

                <div className="card">
                    <div className="card-name">
                        <h5>{crd.cardname}</h5>
                        <h1 className="price">{crd.price}</h1><span className="dueaiton">{crd.duration}</span>
                    </div>
                    <div className="features">
                        <p className={`f1 ${crd.price === "$9" ? "bold" : ""} ${crd.price === "$49" ? "bold" : ""}`}>{crd.user}</p>
                        <p className="f2">{crd.storage}</p>
                        <p className="f3">{crd.publicProjects}</p>
                        <p className="f4">{crd.access}</p>
                        <p className={`f5 ${crd.price === "$0" ? "text-muted" : ""}`}>{crd.privateProjects}</p>
                        <p className={`f6 ${crd.price === "$0" ? "text-muted" : ""}`}>{crd.phoneSupport}</p>
                        <p className={`f7 ${crd.price === "$0" ? "text-muted" : ""} `}><span className={`hidden ${crd.price === "$49" ? "show" : ""}`}>✔ Unlimited</span>{crd.subdomain}</p>
                        <p className={`f8 ${crd.price === "$0" ? "text-muted" : ""} ${crd.price === "$9" ? "text-muted" : ""}`}>{crd.reports}</p>
                    </div>
                    <button type="submit" className="button">BUTTON</button>
                </div>

            )}

        </div>
    )

}