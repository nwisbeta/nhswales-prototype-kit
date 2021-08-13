## Get started

### Request access

Environments you can request access to include:

*   sandbox, to develop a feature that uses the API
*   system integration testing (SIT), to validate an application against integration testing requirements
*   user acceptance testing (UAT), for application end users to test a new feature in a non-production environment (if required)
*   production, for pilot and go-live of your application

Anyone can try the APIs in the sandbox to see how they work. You must work for NHS Wales or be sponsored by an NHS Wales organisation to get SIT, UAT and production access.

{% from 'components/details/macro.njk' import details %}

<div class="nhsuk-expander-group">
{{ details({
  "classes": "nhsuk-expander",
  "text": "Get sandbox access",
  "HTML": "
  <p>Use the sandbox environment to develop a feature that uses the API.</p>
  <p>To get access:</p>
  <ol>
  <li> <a href='https://developer.nhs.wales/signup' target='_blank'>Register for an NHS Wales Developer Portal account (opens in a new tab)</a>.</li>
  <li> Get a subscription key.</li>
  </ol>"
}) }}
{{ details({
  "classes": "nhsuk-expander",
  "text": "Get SIT, UAT and production access (health boards and 3rd party partners)",
  "HTML": "
  <p><a href='#' target=_'blank'>Submit a production access request (opens in a new tab)</a> when you're ready to go live with your application. SIT and UAT access is given first. This is used to make sure your application meets our assurance criteria. Production access will be provided once your application passes assurance checks.</p><p>To get access:</p><ol><li> <a href='#'>Fill in and submit a New Service Request (opens in a new tab)</a> to request access to the API.</li><li> Your request will be reviewed by the Service Portfolio CAB for approval or rejection.</li><li> Submit a ServicePoint call to National Operational Databases (NOD).</li><li> Your request goes to IRAT SMB where it is approved or denied.</li><li> If approved, we will give you connection details. If denied, we will tell you why.</li></ol>"
}) }}
{{ details({
  "classes": "nhsuk-expander",
  "text": "Get SIT, UAT and production access (DHCW application teams)",
  "HTML": "
  <p><a href='#'>Submit a production access request</a> when you're ready to go live with your application. SIT and UAT access is given first. This is used to make sure your application meets our assurance criteria. Production access will be provided once your application passes assurance checks.</p><p>To get access:</p><ol><li> Submit a ServicePoint call to National Operational Databases (NOD).</li><li> Your request goes to IRAT SMB where it is approved or denied.</li><li> If approved, we will give you connection details. If denied, we will tell you why.</li></ol>"
}) }}
</div>

### If you're new to FHIR APIs

{% from 'components/card/macro.njk' import card %}

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    {{ card({
          "href": "#",
          "clickable": "true",
          "heading": "About FHIR API resources",
          "headingClasses": "nhsuk-heading-m",
          "description": "A quick guide to resources, which are the building blocks of every FHIR API request."
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "About FHIR API operations",
      "headingClasses": "nhsuk-heading-m",
      "description": "Learn how the RESTful structure is extended by operations, which are used to create requests."
    }) }}
  </li>
</ul>

### Try making a request

To test example Terminology Service requests in the sandbox, you must:

1.  [Sign in or register an account](https://developer.nhs.wales/signin)
1.  [Subscribe to the sandbox](https://developer.nhs.wales/sandbox)
1.  [Get an access key](https://developer.nhs.wales/profile)

Once you've done that, or if you're already signed in, [try a `ValueSet/$expand` request](example-api-requests). `ValueSet/$expand` is the most common terminology service API request.

### Get support

For specific technical questions, you may want to [join the FHIR community (opens in a new tab)](https://chat.fhir.org/login/). This FHIR knowledge-sharing website allows you to search through content posted by other users, and to post your own issues and questions.

For general support with the terminology service, [email nationalreferencedata@wales.nhs.uk for help](mailto:nationalreferencedata@wales.nhs.uk).
