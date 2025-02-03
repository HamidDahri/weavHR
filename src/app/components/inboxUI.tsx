import {
  faAngle90,
  faArrowLeft,
  faEllipsisVertical,
  faFilter,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const tabData = {
  Inbox: [
    {
      id: 1,
      sender: "Richelle Jorgensen",
      subject: "Job Confirmation: ER Night Cover",
      time: "20min ago",
    },
    {
      id: 2,
      sender: "Lydia Botosh",
      subject: "Welcome & Onboarding Instructions",
      time: "5 hours ago",
    },
    {
      id: 3,
      sender: "IT Support",
      subject: "PMS Credentials Setup",
      time: "1 day ago",
    },
  ],
  Sent: [
    {
      id: 4,
      sender: "Dr. Chen Wu",
      subject: "Shift Swap Response Sent",
      time: "2 days ago",
    },
    {
      id: 5,
      sender: "Admin Office",
      subject: "Policy Updates Sent",
      time: "3 days ago",
    },
  ],
  Draft: [
    {
      id: 6,
      sender: "Draft",
      subject: "Unfinished Job Application",
      time: "Yesterday",
    },
  ],
};

const InboxTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: "Inbox", count: tabData.Inbox.length },
    { name: "Sent", count: tabData.Sent.length },
    { name: "Draft", count: tabData.Draft.length },
  ];

  return (
    <div className="px-4 py-2 border-b ">
      <div className="flex items-center justify-between w-full py-3">
        <span className="text-lg font-semibold text-gray-900">Inbox</span>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
        </button>
      </div>

      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`text-sm font-semibold px-3 py-1 border-b-2 ${
              activeTab === tab.name
                ? "border-b-purple-700  text-purple-700"
                : "text-gray-500 border-b-white"
            }`}
          >
            {tab.name}{" "}
            {tab.count > 0 && (
              <span className="ml-1 text-xs">({tab.count})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const InboxList = ({ messages, onSelect, selectedMessage }) => {
  return (
    <div className="h-screen overflow-y-auto ">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-4 border-b cursor-pointer hover:bg-gray-200 ${
            selectedMessage?.id === message.id
              ? "bg-slate-200 hover:bg-slate-200 relative before:absolute before:right-0 before:top-0 before:bottom-0 before:content-[''] before:w-1 before:bg-primary"
              : ""
          }`}
          onClick={() => onSelect(message)}
        >
          <div className="flex items-center gap-2">
            <img
              src="/images/avatar.png"
              alt="Sender"
              className="w-10 h-10 rounded-full"
            />
            <div className="w-full">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-semibold text-modernGray900">
                  {message.sender}
                </h4>

                <p className="text-xs font-medium text-black">{message.time}</p>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {message.subject}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EmailContent = ({ selectedMessage }) => {
  if (!selectedMessage) {
    return (
      <div className="flex items-center justify-center w-2/3 p-6 text-gray-500 border-l-2">
        Select a message to view its content
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between w-2/3 border-l-2 ">
      <div>
        <div className="flex items-center justify-between px-6 py-3 mb-4 border-b">
          <div className="flex items-center space-x-4">
            <img
              src="/images/avatar.png"
              alt="Sender"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {selectedMessage.sender}
              </h2>
              <p className="text-sm text-gray-600">
                {selectedMessage.sender
                  .toLowerCase()
                  .replace(/\s+/g, "@example.com")}
              </p>
            </div>
          </div>
          <div className="relative inline-block text-left group">
            <button
              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
              type="button"
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="w-5 h-5 text-sm"
              ></FontAwesomeIcon>
            </button>

            <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
              <ul className="p-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    Reply
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-6 py-3">
          <p className="text-sm text-gray-700">Hi Sarah,</p>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>- Job Confirmation: &quot;Your shift #ER2350 confirmed&quot;</p>
            <p>
              - Important Job Info: &quot;Change in patient assignment for
              tomorrows shift&quot;
            </p>
            <p>
              - Onboarding: &quot;Welcome to weaveHR - Complete onboarding
              steps&quot;
            </p>
            <p>
              - PMS Credentials: Your PMS account details & login
              instructions&quot;
            </p>
            <p>- Training/Modules: Mandatory training available</p>
            <p>- Shift Swap Requests: Dr. Chen requests shift #IC2340 swap</p>
            <p>- Documents Request: Please upload your updated certification</p>
            <p>- Policy Updates: New infection control guidelines</p>
            <br />
            <a href="#" className="text-blue-500 underline">
              Link Job ID: 13231 - Victoria Clinic
            </a>
            <br />
            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
              View Attachment
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border-t">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-md shadow-xs" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4881 4.83829C15.8026 5.10785 15.839 5.58133 15.5694 5.89582L9.98781 12.4077L15.5694 18.9196C15.839 19.2341 15.8026 19.7076 15.4881 19.9772C15.1736 20.2467 14.7001 20.2103 14.4306 19.8958L8.43056 12.8958C8.18981 12.615 8.18981 12.2005 8.43056 11.9196L14.4306 4.91963C14.7001 4.60514 15.1736 4.56872 15.4881 4.83829Z"
                  fill="#4B5565"
                />
              </svg>
            </button>

            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-s-0 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.51192 4.83829C8.82641 4.56872 9.29989 4.60514 9.56946 4.91963L15.5695 11.9196C15.8102 12.2005 15.8102 12.615 15.5695 12.8958L9.56946 19.8958C9.29989 20.2103 8.82641 20.2467 8.51192 19.9772C8.19743 19.7076 8.161 19.2341 8.43057 18.9196L14.0122 12.4077L8.43057 5.89582C8.161 5.58133 8.19743 5.10785 8.51192 4.83829Z"
                  fill="#4B5565"
                />
              </svg>
            </button>
          </div>

          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-slate-900 hover:bg-gray-200">
            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
          </button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-slate-900 hover:bg-gray-200">
            Reply All
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-slate-900 hover:bg-gray-200">
            Forward
          </button>
          <button className="px-4 py-2 text-white border rounded-md bg-primary border-primary hover:bg-primaryDark">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Inbox() {
  const [selectedMessage, setSelectedMessage] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("Inbox");

  return (
    <div className="flex h-[calc(100vh-300px)] shadow overflow-hidden bg-white border border-gray-200 rounded-xl">
      <div className="w-1/3">
        <InboxTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <InboxList
          messages={tabData[activeTab]}
          onSelect={setSelectedMessage}
          selectedMessage={selectedMessage}
        />
      </div>
      <EmailContent selectedMessage={selectedMessage} />
    </div>
  );
}
