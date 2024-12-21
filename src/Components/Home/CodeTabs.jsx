import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import pythonLogo from "../../assets/python.png"; // import your logos like this
import jsLogo from "../../assets/programing.png"; // import JavaScript logo
import csharpLogo from "../../assets/c-sharp.png"; // import C# logo
import phpLogo from "../../assets/php.png"; // import PHP logo

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  const codeSnippets = {
    javascript: `
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  body: 'Hi there',
  from: '+9779809120834',
  to: '+9779809120835'
}).then(message => console.log(message.sid));
`,
    python: `
import os
from twilio.rest import Client

account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

message = client.messages.create(
  body='Hi there',
  from_='+9779809120834',
  to='+9779809120835'
)
`,

    csharp: `
using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

class Program
{
    static void Main(string[] args)
    {
        const string accountSid = Environment.GetEnvironmentVariable("TWILIO_ACCOUNT_SID");
        const string authToken = Environment.GetEnvironmentVariable("TWILIO_AUTH_TOKEN");
        TwilioClient.Init(accountSid, authToken);

        var message = MessageResource.Create(
            body: "Hi there",
            from: new Twilio.Types.PhoneNumber("+9779809120834"),
            to: new Twilio.Types.PhoneNumber("+9779809120835")
        );

        Console.WriteLine(message.Sid);
    }
}
`,
    php: `
<?php
require_once '/path/to/vendor/autoload.php';

use Twilio\\Rest\\Client;

$sid = getenv("TWILIO_ACCOUNT_SID");
$token = getenv("TWILIO_AUTH_TOKEN");
$client = new Client($sid, $token);

$client->messages->create(
  '+9779809120835',
  array(
    'from' => '+9779809120834',
    'body' => 'Hi there'
  )
);
?>
`,
  };

  const tabs = [
    { name: "javascript", logo: jsLogo },
    { name: "csharp", logo: csharpLogo },
    { name: "python", logo: pythonLogo },
    { name: "php", logo: phpLogo },
  ];

  return (
    <div className="md:p-8 w-full">
      {/* Tab Buttons */}
      <div className="flex ">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 mr-6 flex items-center rounded-lg ${
              activeTab === tab.name
                ? "bg-[#111827]  text-white"
                : "bg-[#0A202E] text-white"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <img
              src={tab.logo}
              alt={tab.name}
              className="w-6 h-6 mr-2 text-white"
            />
          </button>
        ))}
      </div>

      {/* Code Editor */}
      <div
        className=" rounded-lg p-4 bg-gray-900 text-white max-h-[400px] overflow-y-auto  "
        style={{
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <SyntaxHighlighter
          language={activeTab}
          style={dracula}
          customStyle={{
            maxHeight: "300px",
            overflowY: "auto",
            paddingRight: "16px", // To avoid text cutting near the scroll
          }}
        >
          {codeSnippets[activeTab]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeTabs;
