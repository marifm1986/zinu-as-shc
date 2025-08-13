import React from 'react'
import { ClipboardList, BarChart3, CreditCard } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
interface HowCreditRepairWorksProps {
    'data-id'?: string
}
export const HowCreditRepairWorks: React.FC<HowCreditRepairWorksProps> = ({
    'data-id': dataId,
}) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5
            }
        })
    };
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8" data-id={dataId}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
                    How Credit Repair Works
                </h1>
                <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
                    <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{
                        once: true,
                        amount: 0.3
                    }} variants={cardVariants} className="bg-white p-6 rounded-lg  text-center" whileHover={{
                        y: -5,
                        transition: {
                            duration: 0.2
                        }
                    }}>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 text-blue-600">
                                <ClipboardList size={48} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                                Our Credit Repair Process
                            </h2>
                            <p className="text-gray-600">
                                Simply tell us which credit repair items should be addressed, and
                                we will begin work on your case.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{
                        once: true,
                        amount: 0.3
                    }} variants={cardVariants} className="bg-white p-6 rounded-lg  text-center" whileHover={{
                        y: -5,
                        transition: {
                            duration: 0.2
                        }
                    }}>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 text-green-600">
                                <BarChart3 size={48} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                                Examine Our Results
                            </h2>
                            <p className="text-gray-600">
                                During the year of 2016, we assisted thousands of clients, both
                                old and new, setting them on the road to financial freedom by
                                removing negative items on their credit reports. We are proud to
                                announce that we were able to remove 9,000,000 of these items that
                                year.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{
                    once: true,
                    amount: 0.3
                }} variants={cardVariants} className="bg-white p-6 rounded-lg  text-center" whileHover={{
                    y: -5,
                    transition: {
                        duration: 0.2
                    }
                }}>
                    <div className="text-center">
                        <div className="mb-6 text-purple-600">
                            <CreditCard size={48} className="mx-auto" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                            Consider the Value of Credit
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            One's credit score is based on one's individual set of
                            circumstances, especially when it comes to mortgages and credit
                            cards. Interest rates can be overwhelming, causing stress when your
                            monthly bills arrive. For $79.95, you can take action, saving you
                            hundreds of dollar and a lot of stress.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
