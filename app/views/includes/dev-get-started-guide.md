
# Get started

Learn about NHS Wales' APIs, how you can use them and how to integrate them with your application.

## Overview
The NHS Wales Developer Portal gives you technical guidance for using the APIs that interact with NHS Wales' systems and services.

We've grouped information for each API into separate technical guides. You can access this information by clicking on the name of the API in the [API catalogue](dev-api-catalogue). Content is written clearly, and it's easy to navigate the site to find what you need.

We're currently in Beta. This means that we're still testing the site and making changes. [Email your feedback to us](mailto:ecosphere@wales.nhs.uk) and help us to improve.

### Who the portal is for

Anyone can view the information on this site. However, its content has been created specifically for:

*   NHS Wales development teams
*   development teams contracted to integrate with NHS Wales systems

The site has not been created for general use by patients or the public, so some content has not been translated into Welsh. [Read more about our Welsh standards](#welsh).

### Who maintains the developer portal

The site is maintained by the [Digital Health Ecosystem Team Wales (DHEW)](https://digitalhealth.wales/dhew) programme.

DHEW is a collaboration between Digital Health and Care Wales (DHCW) and the Life Sciences Hub Wales (LSHW). DHEW aims to make it easier and faster to adopt digital healthcare technology in Wales.

If you're a third party developer and you're interested in partnering with us, you may want to:

*   come to a [DHEW engagement event](https://digitalhealth.wales/events?section=28)
*   look at our [standards and resources](https://digitalhealth.wales/dhew/developer-portal) for more information

* * *

## 1. Learn how NHS Wales uses APIs

### Our architecture overview

NHS Wales' digital architecture is created from information management systems and data repositories. Messaging components, including APIs, are used to manage communication between those systems and repositories.

#### Information management systems

Information management systems provide a user interface for viewing and updating information. They include:

*   GP systems, like Vision
*   hospital patient administration systems, like the Welsh Patient Administration system (WPAS)
*   specialist systems, like the Welsh Laboratory Information System (WLIMS)
*   reference management, like the Welsh Pathology Handbook

#### Data repository services

Data repository services provide a secondary or consolidated store of information from other systems, such as:

*   the Welsh Care Record Service (WCRS)
*   the Welsh Results Reporting Service (WRRS)
*   the Welsh Demographics Service (WDS)
*   the Master Patient Index (MPI)
*   the Welsh Reference Data and Terminology Service (WRTS)

#### Messaging components

Messaging components manage the communication between the systems and services. Often, the components are APIs that allow direct communication to the underlying system, such as:

*   WPAS APIs
*   WCRS document search and retrieval APIs
*   MPI patient demographics query API

In other cases, they are APIs or message processors separate to the receiving system that perform some routing, logging, buffering or transformation of the message flows, such as:

*   NHS Wales Messaging Fabric (Fiorano Enterprise Service Bus)
*   GP Links (Iuvo)
*   Welsh Clinical Communications Gateway (WCCG)

#### Identity and access management services

Identity and access management services control users' access to data. Applications should:

*   authenticate users with NADEX or AC3
*   apply role based Access Controls locally or with AC3
*   WCRS document search and retrieval APIs
*   record usage to local audit logs or to the Central Audit Service (CAS)

### Key systems and services

Key NHS Wales systems and services that can be integrated with using APIs include:

*   National Active Directory and Exchange (NADEX),
*   Account control v3 (AC3)
*   Welsh Reference Data Service (WRDS)
*   Terminology service
*   Enterprise Service Bus
*   Welsh Clinical Communication Gateway (WCCG)
*   Requesting services
*   Wales Demographics Service (WDS)
*   Master Patient Index (MPI)
*   Welsh GP Record (WGPR)
*   Welsh Care Record Service (WCRS)
*   Welsh Results Reports Service (WRRS)

Read an [overview of these key NHS Wales systems and services (opens in a new tab)](https://nwisbeta.github.io/open-architecture/docs/getting-started/key-services/) in the NHS Wales Open Architecture documentation.

* * *

## 2. Learn our API technologies and standards

### SOAP/XML

Simple Object Access Protocol (SOAP) APIs are used to access many NHS Wales systems. SOAP APIs use XML to format the message and HTTP to send it. [Read more about SOAP specifications (opens in a new tab)](https://www.w3.org/TR/soap/).

Web Service Description Language (WSDL) documents are used to provide a machine readable definition of SOAP APIs. [Read more about WSDL documents (opens in a new tab)](https://www.w3.org/TR/2001/NOTE-wsdl-20010315).

To connect to a system using a SOAP API, you may want to use a tool that automatically generates the client code for you based on the WSDL.

### Data standards and HL7

We use a blended approach to data structuring. Some APIs have standards that are defined locally, like the Welsh GP Record (WGPR) API and the Welsh Clinical Communications Gateway (WCCD).

Other systems use common standards such as HL7 v2 message structures, like the Master Patient Index (MPI) and the Welsh Lab Information Management System (WLIMS). [Read more about HL7 v2 standards (opens in a new window)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185).

The MPI API also conforms to the IHE Profile for performing [Patient Demographic Queries (opens in a new window)](https://dev.azure.com/NHS-Wales/Ecosystem/_wiki/wikis/Phase1.wiki/262/API-technologies-and-standards) and [Patient Identifier Cross-Reference (opens in a new window)](https://wiki.ihe.net/index.php/Patient_Identifier_Cross-Referencing) operations.

### FHIR and OpenEHR

We use HL7 FHIR and OpenEHR standards, which are modern standards for healthcare systems.

FHIR is a standard for communication between systems. It defines structures for common data entities and an API.

The core FHIR standard aims to meet the needs of 80% of use cases. There are also options to extend and customise definitions for other use cases. The [terminology service](overview) is an example of a system that uses FHIR standards.

OpenEHR is a separate standard that publishes its own data definitions and API specifications for use in healthcare. It also defines models for data persistence in the underlying system. The Clinical Data Repository is an example of a service that uses OpenEHR. Read more in the blog post [What is openEHR and why is it important? (opens in a new window)](https://digitalhealth.wales/news/what-openehr-and-why-it-important).

We expect all new systems to provide an API that conforms to either a FHIR or OpenEHR standard going forward.

* * *

## 3. Search for APIs

You can find all available APIs in the [API catalogue](dev-api-catalogue).

You can also search our [sandbox APIs](http://developer.nhs.wales/sandbox).

As we're in Beta, we're still developing the technical documentation for some APIs.

* * *

## 4. Test and go live

### Sandbox APIs

Our [sandbox APIs](https://developer.nhs.wales/sandbox) allow you to try example requests with mock data. These APIs mimic the behaviour of production APIs as closely as possible, so you can quickly try different integrations to see how they might work within your application.

To test an API in the sandbox, you should:

1.  [Sign in or register an account](https://developer.nhs.wales/signin).
2.  [Subscribe to the sandbox](https://developer.nhs.wales/sandbox).
3.  Search our [sandbox APIs](https://developer.nhs.wales/sandbox) to find the one you'd like to try.

### Testing and production environments

When you're ready to integrate an API with your application, you can request access to:

*   system integration testing (SIT), to validate an application against integration testing requirements
*   user acceptance testing (UAT), for application end users to test a new feature in a non-production environment (if required)
*   production environment, for pilot and go-live of your application

You must go through an assurance process to get access to these environments.

### The access request assurance process

Before you can access the testing and production environments, we must confirm that your use case for integrating with an API meets with our standards. This is known as an assurance process.

The process will be different depending upon which API you're requesting access to. Find the API you'd like to access in the [API catalogue](dev-api-catalogue) and read its documentation to see the most up to date information.

If the API does not have information about its access request assurance process, [email ecosystem@wales.nhs.uk](mailto:ecosystem@wales.nhs.uk).

We will provide production access once your application passes these checks.

* * *

## 5. Get help and support

If you need support with the NHS Wales Developer Portal, [email ecosystem@wales.nhs.uk](mailto:ecosystem@wales.nhs.uk).

If you need help with an API, check the support section of the API's documentation for more specific information about how to get support. This makes sure you are put in touch with the right team more quickly.

* * *

## Welsh language standards

### Content we provide in Welsh

We aim to provide Welsh translation where possible. However, this website is not intended for patients or the public, so technical information has not been translated.

The content that is translated into Welsh includes:

*   the homepage
*   site navigation
*   accessibility
*   terms of use
*   privacy policy

### Ask for tender documents to be translated into Welsh

You can ask us to translate documentation into Welsh if you’re looking to bid for a tender. You must do this within 72 hours of the tender’s Prior Information Notice (PIN) going live. Contact information will be available on the PIN.

You are welcome to make your request in Welsh. We will respond in Welsh. 

### Your Welsh language requirements

You are required to consider Welsh language requirements when creating an application for use by the public, patients and clinicians in Wales.

This ensures that the Welsh language is treated no less favourably than English, and allows all users to access information in Welsh if they choose to.

There is clear advice available in the [Welsh Language Commissioner's Welsh Language Considerations document (opens in a new window)](https://gov.wales/sites/default/files/publications/2021-03/technology-websites-and-software-welsh-language-considerations.pdf). It includes information about bilingually designing your application, with guidance covering:

*   architecture
*   user interface
*   language selection
*   data management

Another helpful resource is the [bilingual technology toolkit for good user experience (opens in a new window)](https://gov.wales/bilingual-technology-toolkit-good-user-experience). You can use this to organise your application's Welsh language requirements by priority.