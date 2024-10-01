"use client";

import { useState, useEffect } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";

const universities = [
    {
        value: "Nanyang Technological University",
        label: "Nanyang Technological University",
        schools: [
            {
                value: "College of Business (Nanyang Business School)",
                label: "College of Business (Nanyang Business School)",
                subjects: [
                    "Accountancy and Business",
                    "Accountancy (3-yr direct Honours Programme)",
                    "Business (3-yr direct Honours Programme)",
                    "Business and Computing",
                    "Accountancy",
                    "Business",
                    "Bachelor of Accountancy (Hons)",
                    "Double Degree in Bachelor of Accountancy (Hons) and Bachelor of Business (Hons)",
                    "Bachelor of Business (Hons)",
                    "Double Degree in Bachelor of Business (Hons) and Bachelor of Engineering (Hons) (Computer Science)",
                    "Double Degree in Business and Computer Engineering/Computing",
                ],
            },
            {
                value: "College of Engineering",
                label: "College of Engineering",
                subjects: [
                    "Aerospace Engineering",
                    "Bioengineering",
                    "Chemical and Biomolecular Engineering",
                    "Computer Engineering",
                    "Civil Engineering",
                    "Computer Science",
                    "Electrical and Electronic Engineering",
                    "Environmental Engineering",
                    "Information Engineering and Media",
                    "Materials Engineering",
                    "Mechanical Engineering",
                    "Maritime Studies",
                    "Electrical And Electronic Engineering",
                    "Information Engineering And Media",
                    "Bachelor of Engineering (Hons) (Aerospace Engineering)",
                    "Bachelor of Engineering (Hons) (Bioengineering)",
                    "Bachelor of Engineering  (Hons) (Chemical And Biomolecular Engineering)",
                    "Bachelor of Engineering (Hons) (Civil Engineering)",
                    "Bachelor of Engineering (Hons) (Computer Engineering)",
                    "Bachelor of Engineering (Hons) (Computer Science)",
                    "Bachelor of Engineering (Hons) (Electrical & Electronic Engineering)",
                    "Bachelor of Engineering (Hons) (Environmental Engineering)",
                    "Bachelor of Engineering (Hons) (Information Engineering & Media)",
                    "Bachelor of Science (Hons) (Maritime Studies)",
                    "Bachelor of Engineering (Hons) (Materials Engineering)",
                    "Bachelor of Engineering (Hons) (Mechanical Engineering)",
                    "Bachelor of Fine Arts (Hons)",
                    "Bachelor of Arts (Hons) in Chinese",
                    "Bachelor of Communication Studies (Hons)",
                    "Bachelor of Arts (Hons) in Economics",
                    "Bachelor of Arts (Hons) in English",
                    "Bachelor of Arts (Hons) in History",
                    "Bachelor of Arts (Hons) in Linguistics And Multilingual Studies",
                    "Bachelor of Arts (Hons) in Psychology",
                    "Bachelor of Arts (Hons) in Public Policy And Global Affairs",
                    "Bachelor of Arts (Hons) in Sociology",
                    "Chemical & Biomolecular Engineering",
                    "Double Degree in Engineering and Economics ^",
                ],
            },
            {
                value: "College of Humanities, Arts & Social Sciences",
                label: "College of Humanities, Arts & Social Sciences",
                subjects: [
                    "Art, Design & Media",
                    "Chinese",
                    "Communication Studies",
                    "Economics (4-years programme)",
                    "English",
                    "Linguistics and Multilingual Studies",
                    "Psychology",
                    "Sociology",
                    "Linguistics And Multilingual Studies",
                    "History",
                    "Linguistics & Multilingual Studies",
                    "Philosophy",
                    "Public Policy and Global Affairs",
                    "Philosophy ^",
                    "Public Policy And Global Affairs",
                    "Art, Design and Media",
                    "Inter-Disciplinary Double Major ^",
                ],
            },
            {
                value: "College of Science",
                label: "College of Science",
                subjects: [
                    "Biomedical Sciences (Traditional Chinese Medicine) #",
                    "Biological Sciences",
                    "Chemistry & Biological Chemistry",
                    "Mathematical Science",
                    "Physics / Applied Physics",
                    "Sports Science and Management",
                    "Biomedical Science (Traditional Chinese Medicine) #",
                    "Mathematics & Economics",
                    "Biomedical Sciences & Chinese Medicine #",
                    "Mathematical Sciences",
                    "Double Degree in Bachelor of Science (Hons) in Biomedical Sciences and Bachelor of Medicine (Chinese Medicine) #",
                    "Bachelor of Science (Hons) in Biological Sciences",
                    "Bachelor of Science (Hons) in Chemistry & Biological Chemistry",
                    "Bachelor of Science (Hons) in Mathematical Sciences",
                    "Bachelor of Science (Hons) in Mathematics & Economics",
                    "Bachelor of Science (Hons) in Physics/Applied Physics",
                    "Biomedical Sciences & Chinese Medicine # ^",
                    "Environmental Earth Systems Science ^",
                    "Physics & Applied Physics",
                    "Environmental Earth Systems Sciences ^",
                    "Biomedical Sciences and Chinese Medicine # ^",
                    "Chemistry and Biological Chemistry",
                    "Mathematics and Economics",
                    "Physics and Applied Physics",
                    "Biological Sciences / Biomedical Sciences",
                    "Mathematical Sciences / Mathematical Sciences and Economics",
                ],
            },
            {
                value: "Lee Kong Chian School of Medicine",
                label: "Lee Kong Chian School of Medicine",
                subjects: ["Medicine #"],
            },
            {
                value: "National Institute of Education (NIE)",
                label: "National Institute of Education (NIE)",
                subjects: [
                    "Science (with Education)",
                    "Arts (with Education)",
                    "Bachelor of Arts (Hons) (Education)",
                    "Bachelor of Science (Hons) (Education)",
                    "Science (with Education) ^",
                ],
            },
            {
                value: "Sports Science and Management",
                label: "Sports Science and Management",
                subjects: [
                    "Sports Science and Management",
                    "Bachelor of Science (Hons) (Sport Science & Management)",
                ],
            },
        ],
    },
    {
        value: "National University of Singapore",
        label: "National University of Singapore",
        schools: [
            {
                value: "Faculty of Arts & Social Sciences",
                label: "Faculty of Arts & Social Sciences",
                subjects: [
                    "Bachelor of Arts",
                    "Bachelor of Arts (Hons)",
                    "Bachelor of Social Sciences",
                ],
            },
            {
                value: "Faculty of Dentistry",
                label: "Faculty of Dentistry",
                subjects: ["Bachelor of Dental Surgery"],
            },
            {
                value: "Faculty of Engineering",
                label: "Faculty of Engineering",
                subjects: [
                    "Bachelor of Engineering (Bioengineering)",
                    "Bachelor of Engineering (Chemical Engineering)",
                    "Bachelor of Engineering (Civil Engineering)",
                    "Bachelor of Engineering (Computer Engineering)",
                    "Bachelor of Engineering (Electrical Engineering)",
                    "Bachelor of Engineering (Engineering Science)",
                    "Bachelor of Engineering (Environmental Engineering)",
                    "Bachelor of Engineering (Industrial and Systems Engineering)",
                    "Bachelor of Engineering (Materials Science and Engineering)",
                    "Bachelor of Engineering (Mechanical Engineering)",
                    "Bachelor of Engineering (Biomedical Engineering)",
                ],
            },
            {
                value: "Faculty of Law",
                label: "Faculty of Law",
                subjects: ["Bachelor of Laws (LLB) (Hons)", "Bachelor of Laws"],
            },
            {
                value: "Faculty of Science",
                label: "Faculty of Science",
                subjects: [
                    "Bachelor of Applied Science (Hons)",
                    "Bachelor of Science",
                    "Bachelor of Science (Hons)",
                    "Bachelor of Science (Pharmacy) (Hons)",
                    "Bachelor of Science (Pharmacy)",
                    "Bachelor of Science (Data Science and Analytics)",
                ],
            },
            {
                value: "Multi-Disciplinary Programmes",
                label: "Multi-Disciplinary Programmes",
                subjects: [
                    "Bachelor of Engineering (Computer Engineering)",
                    "Bachelor of Environmental Studies",
                ],
            },
            {
                value: "Multidisciplinary Programmes",
                label: "Multidisciplinary Programmes",
                subjects: [
                    "Bachelor of Environmental Studies",
                    "Bachelor of Engineering (Computer Engineering)",
                ],
            },
            {
                value: "NUS Business School",
                label: "NUS Business School",
                subjects: [
                    "Bachelor of Business Administration",
                    "Bachelor of Business Administration (Hons)",
                    "Bachelor of Business Administration (Accountancy)",
                    "Bachelor of Business Administration (Accountancy) (Hons)",
                ],
            },
            {
                value: "School of Computing",
                label: "School of Computing",
                subjects: [
                    "Bachelor of Computing (Communications and Media)",
                    "Bachelor of Computing (Computer Science)",
                    "Bachelor of Computing (Electronic Commerce)",
                    "Bachelor of Computing (Information Systems)",
                    "Bachelor of Science (Business Analytics)",
                ],
            },
            {
                value: "School of Design & Environment",
                label: "School of Design & Environment",
                subjects: [
                    "Bachelor of Arts (Industrial Design)",
                    "Bachelor of Science (Project and Facilities Management)",
                    "Bachelor of Science (Real Estate)",
                    "Bachelor of Arts (Architecture)",
                ],
            },
            {
                value: "YLL School of Medicine",
                label: "YLL School of Medicine",
                subjects: [
                    "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
                    "Bachelor of Science (Nursing)",
                    "Bachelor of Science (Nursing) (Hons)",
                ],
            },
            {
                value: "YST Conservatory of Music",
                label: "YST Conservatory of Music",
                subjects: ["Bachelor of Music"],
            },
            {
                value: "Yale-NUS College",
                label: "Yale-NUS College",
                subjects: [
                    "Bachelor of Arts with Honours",
                    "Bachelor of Science with Honours",
                ],
            },
        ],
    },
    {
        value: "Singapore Institute of Technology",
        label: "Singapore Institute of Technology",
        schools: [
            {
                value: "SIT-DigiPen Institute of Technology",
                label: "SIT-DigiPen Institute of Technology",
                subjects: [
                    "Bachelor of Arts in Game Design",
                    "Bachelor of Fine Arts in Digital Arts and Animation",
                    "Bachelor of Science in Computer Science and Game Design",
                    "Bachelor of Science in Computer Science in Real-Time Interactive Simulation",
                    "Bachelor of Engineering with Honours in Systems Engineering (ElectroMechanical Systems)",
                ],
            },
            {
                value: "SIT-Massey University",
                label: "SIT-Massey University",
                subjects: ["Bachelor of Food Technology with Honours"],
            },
            {
                value: "SIT-Newcastle University",
                label: "SIT-Newcastle University",
                subjects: [
                    "Bachelor of Engineering with Honours in Chemical Engineering",
                    "Bachelor of Engineering with Honours in Marine Engineering",
                    "Bachelor of Engineering with Honours in Mechanical Design & Manufacturing Engineering",
                    "Bachelor of Engineering with Honours in Naval Architecture",
                    "Bachelor of Engineering with Honours in Offshore Engineering",
                    "Bachelor of Science with Honours in Food & Human Nutrition",
                    "Bachelor of Engineering with Honours in Electrical Power Engineering",
                    "Bachelor of Engineering with Honours in Mechanical Design and Manufacturing Engineering",
                    "Bachelor of Science with Honours in Food and Human Nutrition",
                ],
            },
            {
                value: "SIT-University of Glasgow",
                label: "SIT-University of Glasgow",
                subjects: [
                    "Bachelor of Engineering with Honours in Aeronautical Engineering",
                    "Bachelor of Engineering with Honours in Aerospace Systems",
                    "Bachelor of Engineering with Honours in Mechanical Design Engineering",
                    "Bachelor of Engineering with Honours in Mechatronics",
                    "Bachelor of Science with Honours in Computing Science",
                    "Bachelor of Science with Honours in Nursing",
                    "Bachelor of Engineering with Honours in Civil Engineering",
                ],
            },
            {
                value: "Singapore Institute of Technology",
                label: "Singapore Institute of Technology",
                subjects: [
                    "Bachelor of Accountancy with Honours",
                    "Bachelor of Engineering with Honours in Information & Communications Technology (Software Engineering)",
                    "Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Land)",
                    "Bachelor of Hospitality Business with Honours",
                    "Bachelor of Engineering with Honours in Information & Communications Technology (Information Security)",
                    "Bachelor of Engineering with Honours in Pharmaceutical Engineering",
                    "Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Building Services)",
                    "Bachelor of Engineering with Honours in Telematics (Intelligent Transportation Systems Engineering)",
                    "Bachelor of Engineering with Honours in Aircraft Systems Engineering",
                    "Bachelor of Science (Diagnostic Radiography)",
                    "Bachelor of Science (Occupational Therapy)",
                ],
            },
            {
                value: "Technische University Munich",
                label: "Technische University Munich",
                subjects: [
                    "Bachelor of Science in Chemical Engineering",
                    "Bachelor of Science in Electrical Engineering & Information Technology",
                ],
            },
            {
                value: "The Culinary Institute of America",
                label: "The Culinary Institute of America",
                subjects: [
                    "Bachelor of Professional Studies in Culinary Arts Management",
                    "Bachelor of Business Administration in Food Business Management",
                ],
            },
            {
                value: "The Glasgow School of Art",
                label: "The Glasgow School of Art",
                subjects: [
                    "Bachelor of Arts with Honours in Communication Design",
                    "Bachelor of Arts with Honours in Interior Design",
                ],
            },
            {
                value: "Trinity College Dublin",
                label: "Trinity College Dublin",
                subjects: [
                    "Bachelor of Science (Occupational Therapy)",
                    "Bachelor of Science (Physiotherapy)",
                    "Bachelor of Science (Diagnostic Radiography)",
                ],
            },
            {
                value: "University of Liverpool",
                label: "University of Liverpool",
                subjects: [
                    "Bachelor of Arts with Honours in Criminology and Security",
                ],
            },
            {
                value: "University of Manchester",
                label: "University of Manchester",
                subjects: [
                    "Bachelor of Science with Honours in Nursing Practice",
                ],
            },
            {
                value: "University of Nevada, Las Vegas",
                label: "University of Nevada, Las Vegas",
                subjects: [
                    "Bachelor of Science (Major in Hospitality Management)",
                ],
            },
            {
                value: "Wheelock College",
                label: "Wheelock College",
                subjects: ["Bachelor of Science in Early Childhood Education"],
            },
        ],
    },
    {
        value: "Singapore Management University",
        label: "Singapore Management University",
        schools: [
            {
                value: "School of Accountancy (4-year programme)",
                label: "School of Accountancy (4-year programme)",
                subjects: [
                    "Accountancy (4-years programme)",
                    "Accountancy (4-years programme) (Hons)",
                    "Accountancy",
                    "Accountancy (Hons)",
                ],
            },
            {
                value: "School of Business (4-year programme)",
                label: "School of Business (4-year programme)",
                subjects: [
                    "Business Management (4-years programme)",
                    "Business Management (4-years programme) (Hons)",
                    "Information Systems Management (4-year programme)",
                    "Information Systems Management (4-year programme) (Hons)",
                    "Business Management",
                    "Business Management (Hons)",
                    "Information Systems Management",
                    "Information Systems Management (Hons)",
                    "Information Systems",
                    "Information Systems (Hons)",
                ],
            },
            {
                value: "School of Economics (4-year programme)",
                label: "School of Economics (4-year programme)",
                subjects: [
                    "Economics (4-years programme)",
                    "Economics (4-years programme) (Hons)",
                    "Economics (Hons)",
                ],
            },
            {
                value: "School of Information Systems (4-year programme)",
                label: "School of Information Systems (4-year programme)",
                subjects: [
                    "Information Systems Management (4-years programme)",
                    "Information Systems Management (4-years programme) (Hons)",
                    "Information Systems Management",
                    "Information Systems Management (Hons)",
                ],
            },
            {
                value: "School of Law (4-year programme)",
                label: "School of Law (4-year programme)",
                subjects: [
                    "Law (4-years programme) #",
                    "Law (4-years programme) Cum Laude and above #",
                    "Law (4-year programme) #",
                    "Law (4-year programme) Cum Laude and above #",
                    "Law #",
                    "Law Cum Laude and above #",
                    "Law (Cum Laude and above) #",
                ],
            },
            {
                value: "School of Social Sciences (4-year programme)",
                label: "School of Social Sciences (4-year programme)",
                subjects: [
                    "Social Sciences (4-years programme)",
                    "Social Sciences (4-years programme) (Hons)",
                    "Social Sciences",
                    "Social Sciences (Hons)",
                ],
            },
        ],
    },
    {
        value: "Singapore University of Social Sciences",
        label: "Singapore University of Social Sciences",
        schools: [
            {
                value: "S R Nathan School of Human Development",
                label: "S R Nathan School of Human Development",
                subjects: [
                    "Bachelor of Human Resource Management",
                    "Bachelor of Social Work",
                    "Bachelor of Early Childhood Education",
                ],
            },
            {
                value: "School of Business",
                label: "School of Business",
                subjects: [
                    "Bachelor of Accountancy",
                    "Bachelor of Science in Finance",
                    "Bachelor of Science in Marketing",
                    "Bachelor of Science in Business Analytics",
                    "Bachelor of Science in Supply Chain Management",
                ],
            },
        ],
    },
];

export default function Home() {
    interface PredictionData {
        employment_rate: number;
        yearly_basic_salary: number;
    }

    const [selectedUniversity, setSelectedUniversity] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [filteredSubjects, setFilteredSubjects] = useState<string[]>([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [openUniversity, setOpenUniversity] = useState(false);
    const [openCourse, setOpenCourse] = useState(false);
    const [openSubject, setOpenSubject] = useState(false);
    const [data, setData] = useState<PredictionData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8080/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    university: selectedUniversity,
                    school: selectedCourse,
                    degree: selectedSubject,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
            // You might want to set an error state here and display it to the user
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (selectedUniversity) {
            const university = universities.find(
                (u) => u.value === selectedUniversity
            );
            setFilteredCourses(university ? university.schools : []);
            setSelectedCourse("");
            setFilteredSubjects([]);
            setSelectedSubject("");
        }
    }, [selectedUniversity]);

    useEffect(() => {
        if (selectedCourse) {
            const course = filteredCourses.find(
                (c) => c.value === selectedCourse
            );
            setFilteredSubjects(course ? course.subjects : []);
            setSelectedSubject("");
        }
    }, [selectedCourse, filteredCourses]);

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Select University, Course, and Subject
            </h1>
            <div className="space-y-4">
                <Popover open={openUniversity} onOpenChange={setOpenUniversity}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openUniversity}
                            className="w-full justify-between"
                        >
                            {selectedUniversity
                                ? universities.find(
                                      (university) =>
                                          university.value ===
                                          selectedUniversity
                                  )?.label
                                : "Select university..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search university..." />
                            <CommandList>
                                <CommandEmpty>
                                    No university found.
                                </CommandEmpty>
                                <CommandGroup>
                                    {universities.map((university) => (
                                        <CommandItem
                                            key={university.value}
                                            value={university.value}
                                            onSelect={(currentValue) => {
                                                setSelectedUniversity(
                                                    currentValue
                                                );
                                                setOpenUniversity(false);
                                            }}
                                        >
                                            {university.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <Popover open={openCourse} onOpenChange={setOpenCourse}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openCourse}
                            className="w-full justify-between"
                            disabled={!selectedUniversity}
                        >
                            {selectedCourse
                                ? selectedCourse
                                : "Select course..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search course..." />
                            <CommandList>
                                <CommandEmpty>No course found.</CommandEmpty>
                                <CommandGroup>
                                    {filteredCourses.map((course) => (
                                        <CommandItem
                                            key={course.value}
                                            value={course.value}
                                            onSelect={(currentValue) => {
                                                setSelectedCourse(currentValue);
                                                setOpenCourse(false);
                                            }}
                                        >
                                            {course.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <Popover open={openSubject} onOpenChange={setOpenSubject}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openSubject}
                            className="w-full justify-between"
                            disabled={!selectedCourse}
                        >
                            {selectedSubject
                                ? selectedSubject
                                : "Select subject..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search subject..." />
                            <CommandList>
                                <CommandEmpty>No subject found.</CommandEmpty>
                                <CommandGroup>
                                    {filteredSubjects.map((subject) => (
                                        <CommandItem
                                            key={subject}
                                            value={subject}
                                            onSelect={(currentValue) => {
                                                setSelectedSubject(
                                                    currentValue
                                                );
                                                setOpenSubject(false);
                                            }}
                                        >
                                            {subject}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <Button
                    onClick={fetchData}
                    disabled={
                        !selectedUniversity ||
                        !selectedCourse ||
                        !selectedSubject ||
                        isLoading
                    }
                    className="w-full"
                >
                    {isLoading ? "Loading..." : "Submit"}
                </Button>

                {data && (
                    <div className="mt-4 p-4 border rounded-md">
                        <h2 className="text-xl font-semibold mb-2">
                            Prediction Results:
                        </h2>
                        <p>Employment Rate: {data.employment_rate}%</p>
                        <p>Yearly Basic Salary: ${data.yearly_basic_salary}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
