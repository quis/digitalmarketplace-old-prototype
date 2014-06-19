(function(){

	var keywords = {
//					"Popular keywords": {
							"CRM": "CRM",
							"IL3": "IL3",
							"SIAM": "SIAM",
							"agile": "agile",
							"backup": "backup",
							"big data": "big data",
							"business analysis": "business analysis",
							"business intelligence": "business intelligence",
							"case management": "case management",
							"cloud": "cloud",
							"cms": "cms",
							"collaboration": "collaboration",
							"consultancy": "consultancy",
							"crm": "crm",
							"email": "email",
							"hosting": "hosting",
							"penetration testing": "penetration testing",
							"procurement": "procurement",
							"project management": "project management",
							"recruitment": "recruitment",
							"risk management": "risk management",
							"security": "security",
							"service desk": "service desk",
							"siam": "siam",
							"sms": "sms",
							"social media": "social media",
							"telephony": "telephony",
							"testing": "testing",
							"user experience": "user experience"
					},
//					"Categories": {
categories = {
							"Business": {
									"Accounting and Finance": {
											"Banking": "Banking",
											"Accounting": "Accounting",
											"Bookkeeping/ Banking": "Bookkeeping/ Banking",
											"Accounts Payable": "Accounts Payable",
											"Accounts Receivable": "Accounts Receivable",
											"Financial Asset Management": "Financial Asset Management",
											"Billing and Invoicing": "Billing and Invoicing",
											"Budgeting": "Budgeting",
											"Costing": "Costing",
											"Funding": "Funding",
											"Money Management": "Money Management",
											"Banking": "Banking",
											"Financial Compliance": "Financial Compliance",
											"Debt Collection": "Debt Collection",
											"Procurement": "Procurement",
											"eProcurement": "eProcurement",
											"Acquisition": "Acquisition",
											"Buying": "Buying",
											"Tendering": "Tendering",
											"eSourcing": "eSourcing",
											"eProcuring": "eProcuring",
											"Expense Management": "Expense Management",
											"Financial Management": "Financial Management",
											"Payment Gateway Software": "Payment Gateway Software",
											"Portfolio Analysis": "Portfolio Analysis",
											"Purchasing Buying": "Purchasing Buying",
											"Revenue Cycle Management": "Revenue Cycle Management",
											"Financial Risk Management": "Financial Risk Management",
											"Tax Management": "Tax Management",
											"Enterprise Resource Planning (ERP)": "Enterprise Resource Planning (ERP)"
									},
									"Business Intelligence and Analytics": {
											"Big Data": "Big Data",
											"Data Analysis": "Data Analysis",
											"Business Analysis": "Business Analysis",
											"Analytics": "Analytics",
											"Data Analytics": "Data Analytics",
											"Data Analysis": "Data Analysis",
											"Business Analysis": "Business Analysis",
											"Data Mining": "Data Mining",
											"Data Visualisation": "Data Visualisation",
											"Reporting and Dashboard": "Reporting and Dashboard"

									},
									"Collaboration": {
											"Project Collaboration": "Project Collaboration",
											"Content Management Systems": "Content Management Systems",
											"CMS": "CMS",
											"Content Storage and Sharing": "Content Storage and Sharing",
											"File Sharing": "File Sharing",
											"Meeting Managment": "Meeting Managment",
											"Social Networking": "Social Networking",
											"Social Media": "Social Media",
											"Twitter": "Twitter",
											"Facebook": "Facebook",
											"Enterprise Social Networking": "Enterprise Social Networking",
											"Idea Management": "Idea Management",
											"Knowledge Management": "Knowledge Management",
											"Online Community": "Online Community",
											"Online Forums": "Online Forums",
											"Task Management": "Task Management",
											"Workflow": "Workflow",
											"Office Suites": "Office Suites",
											"Office Productivity": "Office Productivity",
											"Word Processing": "Word Processing",
											"Presentations": "Presentations",
											"Spreadsheets": "Spreadsheets",
											"Webinars": "Webinars",
											"Wiki Software": "Wiki Software"

									},
									"Customer Relationship Management (CRM)": {
											"Contact Management": "Contact Management",
											"Contact Relationship Management": "Contact Relationship Management",
											"Customer Helpdesks": "Customer Helpdesks",
											"Client Management": "Client Management",
											"Customer Service and Support": "Customer Service and Support",
											"Customer Surveys": "Customer Surveys",
											"Polls": "Polls",
											"Feedback and Reviews Management": "Feedback and Reviews Management",
											"Live Chat": "Live Chat",
											"Call Centre": "Call Centre",
											"Contact Centre": "Contact Centre",
											"Constituent Engagement": "Constituent Engagement"

									},
									"Creative and Design": {
											"Diagram and Wireframe": "Diagram and Wireframe",
											"Usability Tools": "Usability Tools",
											"Accessibility": "Accessibility"

									},
									"Sales": {
											"Sales Intelligence Tracking": "Sales Intelligence Tracking",
											"Sales Performance Management": "Sales Performance Management",
											"Sales and Ops Planning": "Sales and Ops Planning",
											"eCommerce and Shopping Cart Software": "eCommerce and Shopping Cart Software",
											"Payment Gateway Software": "Payment Gateway Software",
											"Recurring Billing and Subscription Management Software": "Recurring Billing and Subscription Management Software"

									},
									"Marketing": {
											"Ad Networks": "Ad Networks",
											"Ad Serving": "Ad Serving",
											"Affiliate Marketing": "Affiliate Marketing",
											"Brand Management": "Brand Management",
											"Campaign Management": "Campaign Management",
											"Display Advertising	Digital Signage": "Display Advertising	Digital Signage",
											"Email Marketing": "Email Marketing",
											"Marketing Analytics": "Marketing Analytics",
											"Marketing Automation": "Marketing Automation",
											"Marketing Data": "Marketing Data",
											"Mobile Marketing": "Mobile Marketing",
											"Online Survey": "Online Survey",
											"Online Poll": "Online Poll",
											"Market Research": "Market Research",
											"Census": "Census",
											"Personalisation and Behavioral Targeting": "Personalisation and Behavioral Targeting",
											"Public Relations": "Public Relations",
											"PR": "PR",
											"Search Marketing": "Search Marketing",
											"Search Engine Optimisation (SEO)": "Search Engine Optimisation (SEO)",
											"Search Engine Marketing (SEM)": "Search Engine Marketing (SEM)",
											"Social Media Marketing": "Social Media Marketing",
											"Social Networking": "Social Networking",
											"Social Media": "Social Media",
											"Twitter": "Twitter",
											"Facebook": "Facebook"

									},
									"Operations Management": {
											"Applications": "Applications",
											"Business Management": "Business Management",
											"Business Performance Management": "Business Performance Management",
											"Business Process Management (BPM)": "Business Process Management (BPM)",
											"Carbon, Energy and Sustainability Management": "Carbon, Energy and Sustainability Management",
											"Green IT": "Green IT",
											"Environmental Management": "Environmental Management",
											"Energy monitoring systems": "Energy monitoring systems",
											"Contract Management": "Contract Management",
											"Digital Asset Management": "Digital Asset Management",
											"Digital Signatures": "Digital Signatures",
											"Enterprise Resource Planning (ERP)": "Enterprise Resource Planning (ERP)",
											"Facility Management": "Facility Management",
											"Building Management": "Building Management",
											"Field Service Management": "Field Service Management",
											"Mobile Working": "Mobile Working",
											"Enterprise Mobility": "Enterprise Mobility",
											"Inventory Management": "Inventory Management",
											"Order Management": "Order Management",
											"Procurement": "Procurement",
											"Product Lifecycle Management": "Product Lifecycle Management",
											"Scheduling and Appointments": "Scheduling and Appointments",
											"Supply Chain Management": "Supply Chain Management",
											"Visitor Management": "Visitor Management",
											"Governance Risk Compliance (GRC)": "Governance Risk Compliance (GRC)",
											"Business Workflow": "Business Workflow"

									},
									"Project Management and Planning": {
											"Agile Project Management": "Agile Project Management",
											"Professional Services Automation (PSA)": "Professional Services Automation (PSA)",
											"Project Portfolio Management": "Project Portfolio Management",
											"Task Management": "Task Management",
											"Time Tracking": "Time Tracking",
											"Project Management": "Project Management"
									},
									"Human Resources and Employee Management": {
											"Applicant Tracking": "Applicant Tracking",
											"Benefits Administration": "Benefits Administration",
											"Culture Management": "Culture Management",
											"Employee Scheduling": "Employee Scheduling",
											"Employee Self-Service": "Employee Self-Service",
											"Enterprise Social Networking": "Enterprise Social Networking",
											"Social Media Management": "Social Media Management",
											"Holiday Planning and Absence Managment": "Holiday Planning and Absence Managment",
											"Training": "Training",
											"Payroll": "Payroll",
											"Performance Management": "Performance Management",
											"Recruitment": "Recruitment",
											"Hiring": "Hiring",
											"Jobs": "Jobs",
											"Salary Tools": "Salary Tools",
											"Talent Management": "Talent Management",
											"Time and Expense Tracking": "Time and Expense Tracking",
											"Workforce Analytics": "Workforce Analytics",
											"Workforce Management": "Workforce Management",
											"Interim Management": "Interim Management"

									}

							},
							"IT": {
									"Telecommunications": {
											"Call Accounting": "Call Accounting",
											"Call Centre": "Call Centre",
											"Contact Centre": "Contact Centre",
											"Email": "Email",
											"Fax Server": "Fax Server",
											"Interactive Voice Response (IVR)": "Interactive Voice Response (IVR)",
											"Mobile": "Mobile",
											"SMS": "SMS",
											"Texting": "Texting",
											"Telecoms Expense Management": "Telecoms Expense Management",
											"Telephony": "Telephony",
											"Phone": "Phone",
											"Calls": "Calls",
											"Unified Communications": "Unified Communications",
											"Video Conferencing": "Video Conferencing",
											"Video Conference": "Video Conference",
											"Video Calling": "Video Calling",
											"VoIP": "VoIP",
											"Webinars": "Webinars",
											"Online Meetings Software": "Online Meetings Software",
											"Blog Software": "Blog Software",
											"Blogging": "Blogging",
											"Online Forum Software": "Online Forum Software",
											"Social Networking Software": "Social Networking Software",
											"Social Media": "Social Media",
											"Twitter": "Twitter",
											"Facebook": "Facebook"

									},
									"Data Management": {
											"Data Import, Export and Sync": "Data Import, Export and Sync",
											"Data Migration": "Data Migration",
											"Data Exchange": "Data Exchange",
											"Data Mining": "Data Mining",
											"Data Removers": "Data Removers",
											"Data Analytics": "Data Analytics",
											"Database Management": "Database Management",
											"Data Storage": "Data Storage",
											"Electronic Data Interchange (EDI)": "Electronic Data Interchange (EDI)",
											"Backup, Recovery and Archival": "Backup, Recovery and Archival"

									},
									"Software Development Tools": {
											"Accessibility": "Accessibility",
											"Agile Development Tools": "Agile Development Tools",
											"Agile Software Development": "Agile Software Development",
											"Application Development": "Application Development",
											"Mobile Development": "Mobile Development",
											"Bug Tracking": "Bug Tracking",
											"Build Tools": "Build Tools",
											"Code Generators": "Code Generators",
											"Electronic Data Interchange (EDI)": "Electronic Data Interchange (EDI)",
											"Form Builder Software": "Form Builder Software",
											"Source Code Management": "Source Code Management",
											"Testing and Optimisation": "Testing and Optimisation",
											"Version Control": "Version Control",
											"Web Load Testing": "Web Load Testing",
											"Website Builder Software": "Website Builder Software",
											"Website Development": "Website Development",
											"Webinars": "Webinars",
											"Search": "Search",
											"Geographic Search": "Geographic Search",
											"Usability Tools": "Usability Tools"
									},
									"Electronic Document and Records Management (EDRM)": {
											"Content Management Systems": "Content Management Systems",
											"Document Management": "Document Management",
											"Electronic Signatures": "Electronic Signatures",
											"File Sending and Sharing": "File Sending and Sharing",
											"Online Backup": "Online Backup"
									},
									"IT Management": {
											"Application Hosting Software": "Application Hosting Software",
											"Application Lifecycle Management": "Application Lifecycle Management",
											"Backup, Recovery and Archival": "Backup, Recovery and Archival",
											"Application Connectors": "Application Connectors",
											"File Systems": "File Systems",
											"Operation Systems Management": "Operation Systems Management",
											"Data Centre Management": "Data Centre Management",
											"Datacentre": "Datacentre",
											"Mobile Device Management": "Mobile Device Management",
											"Infrastructure Consolidation": "Infrastructure Consolidation",
											"IT Asset Management": "IT Asset Management",
											"Software Asset Management": "Software Asset Management",
											"IT Support Services": "IT Support Services",
											"Licence Management": "Licence Management",
											"Office Suites": "Office Suites",
											"Office Productivity": "Office Productivity",
											"Word Processing": "Word Processing",
											"Spreadsheets": "Spreadsheets",
											"Presentations": "Presentations",
											"Password Management": "Password Management",
											"Patch Management": "Patch Management",
											"Single Sign-On (SSO)": "Single Sign-On (SSO)",
											"Security": "Security",
											"Systems Management": "Systems Management",
											"Systems Monitoring": "Systems Monitoring"

									},
									"Security": {
											"Anti-Intrusion": "Anti-Intrusion",
											"Antispam / CAPTCHA": "Antispam / CAPTCHA",
											"Antivirus": "Antivirus",
											"Audit": "Audit",
											"Authentication and Identity Access": "Authentication and Identity Access",
											"Data Protection": "Data Protection",
											"Database Security Monitoring": "Database Security Monitoring",
											"Encryption": "Encryption",
											"Firewall": "Firewall",
											"Load Balancer": "Load Balancer",
											"Log Management": "Log Management",
											"Network Monitoring": "Network Monitoring",
											"Network Security": "Network Security",
											"Remote Access": "Remote Access",
											"Secure Content and Threat Management": "Secure Content and Threat Management",
											"Security Risk Managment": "Security Risk Managment",
											"Penetration Testing": "Penetration Testing"

									}

							},
							"Speciality": {
									"Libraries": {
											"Library Management": "Library Management",
											"Integrated Library System": "Integrated Library System",
											"Library Automation": "Library Automation"

									},
									"Schools and Education": {
											"Academic": "Academic",
											"Alumni Management": "Alumni Management",
											"Asynchronous Learning": "Asynchronous Learning",
											"Camp Management": "Camp Management",
											"Classroom Management": "Classroom Management",
											"Library Automation": "Library Automation",
											"Online Courses": "Online Courses",
											"Online Grading": "Online Grading",
											"School Accounting": "School Accounting",
											"School Administration": "School Administration",
											"Synchronuous Learning": "Synchronuous Learning",
											"eLearning": "eLearning"

									},
									"Energy and Environment": {
											"Metering": "Metering",
											"Mining": "Mining",
											"Oil and Gas": "Oil and Gas",
											"Waste Management": "Waste Management"

									},
									"Healthcare": {
											"NHS/ Health": "NHS/ Health",
											"Case Management": "Case Management",
											"Assisted Living": "Assisted Living",
											"Chiropractic": "Chiropractic",
											"Clinical Decision Support": "Clinical Decision Support",
											"Clinical Trial Management": "Clinical Trial Management",
											"Dental": "Dental",
											"Electronic Medical Records": "Electronic Medical Records",
											"Healthcare Analytics": "Healthcare Analytics",
											"Healthcare Management": "Healthcare Management",
											"Home Health Care": "Home Health Care",
											"Long-Term Care": "Long-Term Care",
											"Medical Billing": "Medical Billing",
											"Medical Imaging": "Medical Imaging",
											"Medical Lab": "Medical Lab",
											"Medical Practice": "Medical Practice",
											"Medical Scheduling": "Medical Scheduling",
											"Medical Transcription": "Medical Transcription",
											"Mental Health": "Mental Health",
											"Optometry": "Optometry",
											"Patient Case Management": "Patient Case Management",
											"Pharmacy Management": "Pharmacy Management",
											"Pharmacy": "Pharmacy",
											"Physical Therapy": "Physical Therapy"

									},
									"Legal": {
											"Court services": "Court services",
											"Electronic Discovery": "Electronic Discovery",
											"eDiscovery": "eDiscovery",
											"Litigation Support": "Litigation Support",
											"Law Practice Management": "Law Practice Management",
											"Law Enforcement": "Law Enforcement",
											"Legal Billing": "Legal Billing",
											"Legal Calendar	Legal Calendaring": "Legal Calendar	Legal Calendaring",
											"Legal Case Management": "Legal Case Management",
											"Legal Document Management": "Legal Document Management",
											"Trust Accounting": "Trust Accounting"

									},
									"Transport and Logistics": {
											"Airport Management": "Airport Management",
											"Aviation Maintenance": "Aviation Maintenance",
											"Distribution": "Distribution",
											"Fleet Tracking": "Fleet Tracking",
											"Freight Management": "Freight Management",
											"Marine": "Marine",
											"Shipping": "Shipping",
											"Transportation Dispatch": "Transportation Dispatch",
											"Trucking Solutions": "Trucking Solutions",
											"Warehouse Management": "Warehouse Management"

									}
							},
							"Other": {
								"SCS": "SCS",
								"Project management, programme management and governance": "Project management, programme management and governance",
								"Onboarding services": "Onboarding services",
								"Design authority": "Design authority",
								"Business analysis": "Business analysis",
								"Project specification and selection": "Project specification and selection",
								"Enterprise architecture": "Enterprise architecture",
								"Service integration and management services (SIAM)	": "Service integration and management services (SIAM)	",
								"Transition management": "Transition management",
								"Deployment": "Deployment",
								"User management": "User management",
								"Data recovery, conversion and migration": "Data recovery, conversion and migration",
								"Digital archiving": "Digital archiving",
								"Risk management": "Risk management",
								"Penetration testing": "Penetration testing",
								"IT healthcheck	": "IT healthcheck	",
								"Helpdesk": "Helpdesk",
								"Software support": "Software support",
								"Training": "Training",
								"IaaS": "IaaS",
								"Compute": "Compute",
								"Storage": "Storage",
								"Content Delivery Network (CDN)": "Content Delivery Network (CDN)",
								"PaaS": "PaaS",
								"Application deployment": "Application deployment",
								"Components": "Components"
							}
//					}
			},
			matches, parents,
			containsWords = function(categoryName, searchTerm) {

				var index,
						matches = false,
						words = searchTerm.split(" ");

				for (index in words) {

					if (-1 === categoryName.toLowerCase().indexOf(words[index].toLowerCase())) return false;

				}

				return true;

			},
			getMatchingCategories = function(categories, searchTerm) {

				for (var name in categories) {

					if ("object" === typeof categories[name]) {

						getMatchingCategories(categories[name], searchTerm);

					}

					if (containsWords(name, searchTerm)) {

						matches.push(name);

					}

				}

			},
			tottResults = function() {

				var count = $("#picked li").add(".optionSelected").not(".dontCount").length;

				$("#resultCount").text(
					Math.floor(
						17156 / (1 + (count * count * count *  (Math.random() + 1)))
					)
				);

			};
			var toggleSelection = function() {

				$(this)
					.toggleClass("optionSelected", $("input", this).is(":checked"));

				if (
					"radio" === $("input", this).attr("type") &&
					$("input", this).is(":checked")
				) {

					$(this).siblings().removeClass("optionSelected");

				}

				tottResults();

			};

	$("#keywords")
		.on(
			"keyup",
			function(event) {

				var code = event.keyCode || event.which;

				if (
					code === 13 ||
					code === 38 ||
					code === 40
				) return;

				var fieldValue = $(this).val(),
						$suggestionHolder = $("#suggestions").html(""),
						i;

				$suggestionHolder.html("");

				if ("" === $.trim(fieldValue)) return;

				matches = [];
				parents = [];
				popped = false;
				getMatchingCategories(categories, fieldValue, "");

				parents = [];
				popped = false;
				getMatchingCategories(keywords, fieldValue, "");

				matches = matches.filter(function(elem, pos) {
			    return matches.map(function(currentValue){
						return currentValue.toLowerCase();
					}).indexOf(elem.toLowerCase()) == pos;
				});

				i = (matches.length > 6) ? 7 : matches.length;

				while (i--) {

					$suggestionHolder.append(
						"<li>" +
							matches[i] +
						"</li>"
					);

				}

				$suggestionHolder.find("li").eq(0).addClass("selected");

		});

	$("#keywords")
		.on(
			"keyup",
			function(event) {

				var code = event.keyCode || event.which;

				if (code === 13) {

					event.preventDefault();

					console.log($("#suggestions li.selected").length);

					if ($("#suggestions li.selected").length) {

						console.log("picking suggestion");

						$("#keywords")
							.val($("#suggestions li.selected").text());

						$("#suggestions").html("");

					} else {

						console.log("no suggestions");

						$("#addKeyword").trigger("click");

					}

				} else if (code === 38) {

					console.log("up");

					event.preventDefault();

					if (!$("#suggestions li.selected").prev("li").length) return;

					$("#suggestions li.selected")
						.removeClass("selected")
					.prev("li")
						.addClass("selected");

				} else if (code === 40) {

					event.preventDefault();

					console.log("down to", $("#suggestions li.selected").next("li").text());

					if (!$("#suggestions li.selected").next("li").length) return;

					$("#suggestions li.selected")
						.removeClass("selected")
					.next("li")
						.addClass("selected");

				}

			}
		);

	$("#searchBuilder")
		.on("submit", function(event) {
			event.preventDefault();
		});

	$("#addKeyword")
		.on(
			"click",
			function() {

				var val = $("#keywords").val();

				if ("" === $.trim(val)) return;

				$("#picked").append("<li>" + val + "</li>");

				$("#suggestions").html("");

				$("#keywords").val("").focus();

				tottResults();

			}
		);

	$("#suggestions")
		.on(
			"click",
			"li",
			function() {

				$("#keywords")
					.val($(this).text());

				$("#suggestions").html("");

			}
		);


	$("#picked")
		.on(
			"click",
			"li",
			function() {

				$(this).remove();

				tottResults();

			}
		);


	$(".chunk")
		.on("click", toggleSelection)
		.each(toggleSelection);

	$("#requirementsToggle")
		.on(
			"click",
			function(event){

				event.preventDefault();

				console.log();

				$(this).next("div").show();

			}
		);

	$(".toggleSections")
		.click(
			function() {

				$(".hideable").addClass("hidden");

				console.log($(this).find("input").data("target"));

				$("#" + $(this).find("input").data("target")).removeClass("hidden");

			}
		);

	$(".searchbuilder-container-bit h3")
		.on("click", function() {

			$(this).parents(".searchbuilder-container-bit").toggleClass("open");

			if (
				$(this).parents(".searchbuilder-container-bit").is(".keywords-section")
			) {

				$("#addKeyword").trigger("click");

			}

		});

	tottResults();

}());
