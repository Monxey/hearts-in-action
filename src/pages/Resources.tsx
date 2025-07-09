import ResourceCard from "../components/ResourceCard";
import '../App.css'

function Resources() {
    const resources = [
        {
            category: "Nationwide Overview",
            links: [
                {
                    resource: "USDA Economic Research Service – Food Security in the U.S.",
                    link: "https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-us"
                },
                {
                    resource: "Food Research & Action Center - Hunger & Poverty in America",
                    link: "https://frac.org/hunger-poverty-america"
                },
                {
                    resource: "Map the Meal Gap (Feeding America)",
                    link: "https://www.feedingamerica.org/research/map-the-meal-gap/overall-executive-summary"
                },
                {
                    resource: "USAFacts – Food insecurity is impacting one out of eight American adults",
                    link: "https://usafacts.org/articles/food-insecurity-in-the-us/"
                }
            ]
        },
        {
            category: "Policy & Trends",
            links: [
                {
                    resource: "Rural America is hungry",
                    link: "https://www.washingtonpost.com/opinions/2025/04/29/snap-cuts-rural-jose-andres/"
                },
                {
                    resource: "Time – Food Assistance Programs Should Incentivize Healthier Eating",
                    link: "https://time.com/7297603/snap-subsidizing-soda-arianna-huffington-essay/"
                },
            ]
        },
        {
            category: "College Park Community",
            links: [
                {
                    resource: "University of Maryland Today – Survey Measures Food Insecurity Among UMD Students",
                    link: "https://today.umd.edu/survey-returns-to-measure-food-insecurity-among-umd-students"
                },
                {   
                    resource: "FindHelp.org – Food pantry programs in College Park, MD",
                    link: "https://www.findhelp.org/food/food-pantry--college-park-md"
                },
                {
                    resource: "College Park Community Food Bank",
                    link: "https://www.collegeparkfoodbank.com/"
                }
            ]
        }
    ];

    return (
        <>
            <section className="main-background">
                <div className="two-column-grid">
                    {resources.map((resource, idx) => {
                        const isOdd = (idx + 1) % 2 === 1;
                        const isLast = idx === resources.length - 1;

                        if (isOdd && isLast) {
                            return (
                                <div className="center-item">
                                    <ResourceCard key={idx} category={resource.category} links={resource.links}/>
                                </div>
                            )
                        }
                        else {
                            return (
                                    <ResourceCard key={idx} category={resource.category} links={resource.links}/>
                            )
                    }  
                })}
                </div>
            </section>
        </>
    )

}

export default Resources;