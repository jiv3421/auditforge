/* eslint-disable sonarjs/no-duplicate-string */
export default {
  generalSettings: 'General Settings',
  changeDisplayLanguage: 'Display Language',
  changeDisplayLanguageInfo: 'Choose your preferred default language',
  nav: {
    audits: 'Audits',
    vulnerabilities: 'Vulnerabilities',
    data: 'Data',
  },
  btn: {
    cancel: 'Cancel',
    confirm: 'Confirm',
    create: 'Create',
    ok: 'ok',
    leave: 'Leave',
    stay: 'Stay',
    topButtonSection: {
      submitReview: 'Submit Review',
      cancelReview: 'Cancel Review',
      approve: 'Approve',
      removeApproval: 'Remove Approval',
      createRetest: 'Create Retest',
      navigateRetest: 'Access Retest',
    },
    backupFinding: 'Propose Creation / Update in Vulnerability Database',
    delete: 'Delete',
    save: 'Save',
    update: 'Update',
    deleteAll: 'Delete All',
    enable: 'Enable',
    valid: 'Valid',
    new: 'New',
    updates: 'Updates',
    accountsEnabled: 'Enabled accounts',
    accountsDisabled: 'Disabled accounts',
    accountEnabled: 'Account enabled',
    accountDisabled: 'Account disabled',
    all: 'All',
  },
  tooltip: {
    usersConnected: 'Users on the Audit:',
    editAudit: 'Edit Audit',
    downloadReport: 'Download Report',
    deleteAudit: 'Delete Audit',
    removeAudit: 'Remove Audit (Audit will not be deleted)',
    topButtonSection: {
      submitReview: 'Mark audit as ready for review',
      cancelReview: 'Make changes to the audit',
      approve: 'Approve this audit',
      removeApproval: 'Remove audit approval',
      createRetest: 'Create a Retest for this Audit',
      navigateRetest: 'Navigate to the Retest of this Audit',
    },
    sortOptions: 'Sort Options',
    addToFindings: 'Add to Findings',
    edit: 'Edit',
    view: 'View',
    findAudits: 'Find Audits',
    delete: 'Delete',
    download: 'Download',
    retestSplitView: 'Enable split view with original Finding data',
    addAudit: 'Add Audit',
  },
  msg: {
    auditReviewUpdateOk: 'Audit review status updated successfully',
    auditApprovalUpdateOk: 'Audit approval updated successfully',
    auditUpdateOk: 'Audit updated successfully',
    findingCreateOk: 'Finding created successfully',
    findingUpdateOk: 'Finding updated successfully',
    findingDeleteOk: 'Finding deleted successfully',
    doYouWantToLeave: 'Do you really want to leave ?',
    thereAreUnsavedChanges: 'There are unsaved changes !',
    fieldRequired: 'Please fill all required Fields',
    deleteFindingConfirm: 'Delete current Finding ?',
    deleteFindingNotice: "This action can't be cancelled",
    selectHost: 'Select Host',
    importHostsFirst: 'Import Hosts first',
    auditTypeNotSet: 'Audit Type not set',
    sectionUpdateOk: 'Section updated successfully',
    lastnameRequired: 'Lastname required',
    firstnameRequired: 'Firstname required',
    emailRequired: 'Email required',
    clientCreatedOk: 'Client created successfully',
    clientUpdatedOk: 'Client updated successfully',
    clientDeletedOk: 'Client deleted successfully',
    deleteNotice: 'will be permanently deleted',
    confirmSuppression: 'Confirm Suppression',
    confirmRemoval: 'Confirm Removal',
    usernameRequired: 'Username required',
    passwordRequired: 'Password required',
    currentPasswordRequired: 'Current Password required',
    confirmPasswordDifferents:
      'New Password and Confirm Password are differents',
    passwordComplexity:
      'Password must be at least 8 characters with minimum 1 Uppercase, Lowercase and Number',
    collaboratorCreatedOk: 'Collaborator created successfully',
    collaboratorUpdatedOk: 'Collaborator updated successfully',
    collaboratorDeletedOk: 'Collaborator deleted successfully',
    nameRequired: 'Name required',
    fileRequired: 'File required',
    companyCreatedOk: 'Company created successfully',
    companyUpdatedOk: 'Company updated successfully',
    companyDeletedOk: 'Company deleted successfully',
    templateNotFound: 'Template Not Found',
    templateCreatedOk: 'Template created successfully',
    templateUpdatedOk: 'Template updated successfully',
    allVulnerabilitesDeleteNotice:
      'All Vulnerabilities will be permanently deleted',
    allVulnerabilitesDeleteOk: 'All vulnerabilities deleted successfully',
    profileUpdateOk: 'Profile updated successfully',
    settingsUpdatedOk: 'Settings updated successfully',
    revertingSettings: 'Reverting settings !',
    revertingSettingsConfirm:
      'Do you really wish to revert the settings to the defaults? You will lose all current settings.',
    importingSettings: 'Importing settings !',
    importingSettingsConfirm:
      'Do you really wish to import the new settings? You will lose all current settings that are replaced.',
    settingsImportedOk: 'Settings imported successfully',
    vulnerabilityCreatedOk: 'Vulnerability created successfully',
    vulnerabilityUpdatedOk: 'Vulnerability updated successfully',
    vulnerabilityDeletedOk: 'Vulnerability deleted successfully',
    vulnerabilityWillBeDeleted: 'Vulnerability will be permanently deleted',
    confirmCategoryChange: 'Confirm Category change',
    categoryChangingNotice:
      'Custom Fields display could be impacted when changing Category',
    vulnerabilityMergeOk: 'Vulnerability merge successfully',
    tryingToContactBackend: '<p>Trying to contact backend</p>',
    wrongContactingBackend: 'Something went wrong contacting backend',
    highlightWarningTitle: 'Highlighted Text still present !',
    noAuditTypeForThisStage: 'No Assessments. Create an Audit Type first',
    languageCreatedOk: 'Language Created Successfully!',
    languagesUpdatedOk: 'Languages Updated Successfully!',
    recommendationSuboptimal: 'The recommendation is suboptimal',
    auditDeletedOk: 'Audit deleted successfully',
    auditDeleteNotice: 'Audit will be permanently deleted',
    customFieldCreatedOk: 'Custom Field Created Successfully!',
    customFieldDeleteNotice:
      'Custom Field {{0}} will be permanently deleted.<br>This field will be removed from ALL Vulnerablities and associated data will be permanently LOST!',
    customFieldDeleteOk:
      'Custom Field {{0}} deleted successfully. {{1}} Vulnerabilities were affected.',
  },
  err: {
    notDefinedLanguage: 'Not defined for this language',
    invalidYamlFormat: 'Invalid YAML format detected',
    parsingError1: 'Parsing Error: {0}',
    parsingError2: 'Parsing Error: line {0}, column: {1}',
    invalidJsonFormat: 'Invalid JSON format detected',
    jsonMustBeAnObject: 'JSON must be an object.',
    importingSettingsError: 'Error importing settings',
    errorWhileParsingJsonContent: 'Error while parsing JSON content: {0}',
    titleRequired: 'Title required',
    descriptionRequired: 'Description required',
    expiredToken: 'Expired token',
    invalidToken: 'Invalid token',
    invalidCredentials: 'Invalid credentials',
    noMatchingRecords: 'No matching records found',
    errorCreatingLang: 'Error creating language!',
    errorUpdatingLangs: 'Error updating languages!',
    failedDeleteVulnerability: 'Failed to delete the vulnerability',
    failedCWERecommendation:
      'An error occurred during the recommendation process',
    vulnerabilityTitleAlreadyExists: 'Vulnerability title already exists',
    failedCreateVulnerability: 'Error creating vulnerability',
    failedUpdateVulnerability: 'Error updating vulnerability',
    failedMergeVulnerabilities: 'Error merging vulnerabilities',
    mergeNoVulnerabilitiesSelected: 'Both vulnerabilities must be selected',
    failedDeleteAudit: 'Failed to delete the audit',
    failedUpdateProfile: 'Failed to update profile',
    failedUpdateAudit: 'Failed to update audit',
    customFieldAlreadyExists: 'Custom Field already exists',
    failedCreateCustomField: 'Error creating custom field',
    failedDeleteCustomField: 'Failed to delete the custom field',
  },
  cvss: {
    title: 'CVSS v3.1 Base Score',
    impactSubscore: 'Impact Subscore',
    exploitabilitySubscore: 'Exploitability Subscore',
    infoWhenNoScore: 'Select values for all base metrics to generate score',
    attackVector: 'Attack Vector',
    attackComplexity: 'Attack Complexity',
    privilegesRequired: 'Privileges Required',
    userInteraction: 'User Interaction',
    scope: 'Scope',
    confidentialityImpact: 'Confidentiality Impact',
    integrityImpact: 'Integrity Impact',
    availabilityImpact: 'Availability Impact',
    network: 'Network',
    adjacentNetwork: 'Adjacent Network',
    local: 'Local',
    physical: 'Physical',
    low: 'Low',
    high: 'High',
    none: 'None',
    required: 'Required',
    unchanged: 'Unchanged',
    changed: 'Changed',
    temporalEnvironmentalTitle: 'Temporal and Environmental Scores',
    temporalTitle: 'Temporal Score',
    environmentalTitle: 'Environmental Score',
    environmentalModifiedImpact: 'Modified impact Subscore',
    environmentalModifiedExploitability: 'Modified Exploitability Subscore',
    exploitCodeMaturity: 'Exploit Code Maturity',
    remediationLevel: 'Remediation Level',
    reportConfidence: 'Report Confidence',
    confidentialityRequirement: 'Confidentiality Requirement',
    integrityRequirement: 'Integrity Requirement',
    availabilityRequirement: 'Availability Requirement',
    modifiedAttackVector: 'Modified Attack Vector',
    modifiedAttackComplexity: 'Modified Attack Complexity',
    modifiedPrivilegesRequired: 'Modified Privileges Required',
    modifiedUserInteraction: 'Modified User Interaction',
    modifiedScope: 'Modified Scope',
    modifiedConfidentialityImpact: 'Modified Confidentiality Impact',
    modifiedIntegrityImpact: 'Modified Integrity Impact',
    modifiedAvailabilityImpact: 'Modified Availability Impact',
    notDefined: 'Not Defined',
    unproven: 'Unproven',
    poc: 'Proof-of-Concept',
    functional: 'Functional',
    officialFix: 'Official Fix',
    temporaryFix: 'Temporary Fix',
    workaround: 'Workaround',
    unavailable: 'Unavailable',
    unknown: 'Unknown',
    reasonable: 'Reasonable',
    confirmed: 'Confirmed',
    medium: 'Medium',
    tooltip: {
      baseMetricGroup_Legend:
        'The Base Metric group represents the intrinsic  characteristics of a vulnerability that are constant over time and across user environments. Determine the vulnerable component and score Attack Vector, Attack Complexity, Privileges Required and User Interaction relative to this.',
      AV_Heading:
        'This metric reflects the context by which vulnerability exploitation is possible. The Base Score increases the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable component.',
      AV_N_Label:
        "The vulnerable component is bound to the network stack and the set of possible attackers extends beyond the other options listed, up to and including the entire Internet. Such a vulnerability is often termed 'remotely exploitable' and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers).",
      AV_A_Label:
        'The vulnerable component is bound to the network stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared physical (e.g., Bluetooth or IEEE 802.11) or logical (e.g., local IP subnet) network, or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN to an administrative network zone).',
      AV_L_Label:
        "The vulnerable component is not bound to the network stack and the attacker's path is via read/write/execute capabilities. Either: the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or remotely (e.g., SSH); or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., tricking a legitimate user into opening a malicious document).",
      AV_P_Label:
        'The attack requires the attacker to physically touch or manipulate the vulnerable component. Physical interaction may be brief or persistent.',
      AC_Heading:
        "This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. Such conditions may require the collection of more information about the target or computational exceptions. The assessment of this metric excludes any requirements for user interaction in order to exploit the vulnerability. If a specific configuration is required for an attack to succeed, the Base metrics should be scored assuming the vulnerable component is in that configuration.",
      AC_L_Label:
        'Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable success against the vulnerable component.',
      AC_H_Label:
        "A successful attack depends on conditions beyond the attacker's control. That is, a successful attack cannot be accomplished at will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against the vulnerable component before a successful attack can be expected. For example, a successful attack may require an attacker to: gather knowledge about the environment in which the vulnerable target/component exists; prepare the target environment to improve exploit reliability; or inject themselves into the logical network path between the target and the resource requested by the victim in order to read and/or modify network communications (e.g., a man in the middle attack).",
      PR_Heading:
        'This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.',
      PR_N_Label:
        'The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files to carry out an attack.',
      PR_L_Label:
        'The attacker is authorized with (i.e., requires) privileges that provide basic user capabilities that could normally affect only settings and files owned by a user. Alternatively, an attacker with Low privileges may have the ability to cause an impact only to non-sensitive resources.',
      PR_H_Label:
        'The attacker is authorized with (i.e., requires) privileges that provide significant (e.g., administrative) control over the vulnerable component that could affect component-wide settings and files.',
      UI_Heading:
        'This metric captures the requirement for a user, other than the attacker, to participate in the successful compromise the vulnerable component. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner.',
      UI_N_Label:
        'The vulnerable system can be exploited without any interaction from any user.',
      UI_R_Label:
        'Successful exploitation of this vulnerability requires a user to take some action before the vulnerability can be exploited.',
      S_Heading:
        'Does a successful attack impact a component other than the vulnerable component? If so, the Base Score increases and the Confidentiality, Integrity and Authentication metrics should be scored relative to the impacted component.',
      S_U_Label:
        'An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority.',
      S_C_Label:
        'An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities.',
      C_Heading:
        'This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.',
      C_N_Label:
        'There is no loss of confidentiality within the impacted component.',
      C_L_Label:
        'There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the impacted component.',
      C_H_Label:
        'There is total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact.',
      I_Heading:
        'This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information.',
      I_N_Label: 'There is no loss of integrity within the impacted component.',
      I_L_Label:
        'Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact on the impacted component.',
      I_H_Label:
        'There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component.',
      A_Heading:
        'This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. It refers to the loss of availability of the impacted component itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of an impacted component.',
      A_N_Label:
        'There is no impact to availability within the impacted component.',
      A_L_Label:
        'Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component.',
      A_H_Label:
        'There is total loss of availability, resulting in the attacker being able to fully deny access to resources in the impacted component; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).',
      temporalMetricGroup_Legend:
        'The Temporal metrics measure the current state of exploit techniques or code availability, the existence of any patches or workarounds, or the confidence that one has in the description of a vulnerability.',
      E_Heading:
        "This metric measures the likelihood of the vulnerability being attacked, and is typically based on the current state of exploit techniques, exploit code availability, or active, 'in-the-wild' exploitation.",
      E_X_Label:
        'Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Temporal Score, i.e., it has the same effect on scoring as assigning High.',
      E_U_Label: 'No exploit code is available, or an exploit is theoretical.',
      E_P_Label:
        'Proof-of-concept exploit code is available, or an attack demonstration is not practical for most systems. The code or technique is not functional in all situations and may require substantial modification by a skilled attacker.',
      E_F_Label:
        'Functional exploit code is available. The code works in most situations where the vulnerability exists.',
      E_H_Label:
        'Functional autonomous code exists, or no exploit is required (manual trigger) and details are widely available. Exploit code works in every situation, or is actively being delivered via an autonomous agent (such as a worm or virus). Network-connected systems are likely to encounter scanning or exploitation attempts. Exploit development has reached the level of reliable, widely-available, easy-to-use automated tools.',
      RL_Heading:
        'The Remediation Level of a vulnerability is an important factor for prioritization. The typical vulnerability is unpatched when initially published. Workarounds or hotfixes may offer interim remediation until an official patch or upgrade is issued. Each of these respective stages adjusts the temporal score downwards, reflecting the decreasing urgency as remediation becomes final.',
      RL_X_Label:
        'Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Temporal Score, i.e., it has the same effect on scoring as assigning Unavailable.',
      RL_O_Label:
        'A complete vendor solution is available. Either the vendor has issued an official patch, or an upgrade is available.',
      RL_T_Label:
        'There is an official but temporary fix available. This includes instances where the vendor issues a temporary hotfix, tool, or workaround.',
      RL_W_Label:
        'There is an unofficial, non-vendor solution available. In some cases, users of the affected technology will create a patch of their own or provide steps to work around or otherwise mitigate the vulnerability.',
      RL_U_Label:
        'There is either no solution available or it is impossible to apply.',
      RC_Heading:
        'This metric measures the degree of confidence in the existence of the vulnerability and the credibility of the known technical details. Sometimes only the existence of vulnerabilities are publicized, but without specific details. For example, an impact may be recognized as undesirable, but the root cause may not be known. The vulnerability may later be corroborated by research which suggests where the vulnerability may lie, though the research may not be certain. Finally, a vulnerability may be confirmed through acknowledgement by the author or vendor of the affected technology. The urgency of a vulnerability is higher when a vulnerability is known to exist with certainty. This metric also suggests the level of technical knowledge available to would-be attackers.',
      RC_X_Label:
        'Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Temporal Score, i.e., it has the same effect on scoring as assigning Confirmed.',
      RC_U_Label:
        'There are reports of impacts that indicate a vulnerability is present. The reports indicate that the cause of the vulnerability is unknown, or reports may differ on the cause or impacts of the vulnerability. Reporters are uncertain of the true nature of the vulnerability, and there is little confidence in the validity of the reports or whether a static Base score can be applied given the differences described. An example is a bug report which notes that an intermittent but non-reproducible crash occurs, with evidence of memory corruption suggesting that denial of service, or possible more serious impacts, may result.',
      RC_R_Label:
        "Significant details are published, but researchers either do not have full confidence in the root cause, or do not have access to source code to fully confirm all of the interactions that may lead to the result. Reasonable confidence exists, however, that the bug is reproducible and at least one impact is able to be verified (Proof-of-concept exploits may provide this). An example is a detailed write-up of research into a vulnerability with an explanation (possibly obfuscated or 'left as an exercise to the reader') that gives assurances on how to reproduce the results.",
      RC_C_Label:
        'Detailed reports exist, or functional reproduction is possible (functional exploits may provide this). Source code is available to independently verify the assertions of the research, or the author or vendor of the affected code has confirmed the presence of the vulnerability.',
      environmentalMetricGroup_Legend:
        "These metrics enable the analyst to customize the CVSS score depending on the importance of the affected IT asset to a user's organization, measured in terms of complementary/alternative security controls in place, Confidentiality, Integrity, and Availability. The metrics are the modified equivalent of base metrics and are assigned metric values based on the component placement in organization infrastructure.",
      CR_Heading:
        "These metrics enable the analyst to customize the CVSS score depending on the importance of the Confidentiality of the affected IT asset to a user's organization, relative to other impacts. This metric modifies the environmental score by reweighting the Modified Confidentiality impact metric versus the other modified impacts.",
      CR_X_Label:
        'Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Environmental Score, i.e., it has the same effect on scoring as assigning Medium.',
      CR_L_Label:
        'Loss of Confidentiality is likely to have only a limited adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).',
      CR_M_Label:
        'Assigning this value to the metric will not influence the score.',
      CR_H_Label:
        'Loss of Confidentiality is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).',
      IR_Heading:
        "These metrics enable the analyst to customize the CVSS score depending on the importance of the Integrity of the affected IT asset to a user's organization, relative to other impacts. This metric modifies the environmental score by reweighting the Modified Integrity impact metric versus the other modified impacts.",
      IR_X_Label:
        'Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Environmental Score, i.e., it has the same effect on scoring as assigning Medium.',
      IR_L_Label:
        'Loss of Integrity is likely to have only a limited adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).',
      IR_M_Label:
        'Assigning this value to the metric will not influence the score.',
      IR_H_Label:
        'Loss of Integrity is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).',
      AR_Heading:
        "These metrics enable the analyst to customize the CVSS score depending on the importance of the Availability of the affected IT asset to a user's organization, relative to other impacts. This metric modifies the environmental score by reweighting the Modified Availability impact metric versus the other modified impacts.",
      AR_X_Label:
        'Assigning this value indicates there is insufficient information to choose one of the other values, and has no impact on the overall Environmental Score, i.e., it has the same effect on scoring as assigning Medium.',
      AR_L_Label:
        'Loss of Availability is likely to have only a limited adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).',
      AR_M_Label:
        'Assigning this value to the metric will not influence the score.',
      AR_H_Label:
        'Loss of Availability is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).',
      MAV_Heading:
        'This metric reflects the context by which vulnerability exploitation is possible. The Environmental Score increases the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable component.',
      MAV_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MAV_N_Label:
        "The vulnerable component is bound to the network stack and the set of possible attackers extends beyond the other options listed, up to and including the entire Internet. Such a vulnerability is often termed 'remotely exploitable' and can be thought of as an attack being exploitable at the protocol level one or more network hops away.",
      MAV_A_Label:
        'The vulnerable component is bound to the network stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared physical (e.g., Bluetooth or IEEE 802.11) or logical (e.g., local IP subnet) network, or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN).',
      MAV_L_Label:
        "The vulnerable component is not bound to the network stack and the attacker's path is via read/write/execute capabilities. Either: the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or remotely (e.g., SSH); or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., tricking a legitimate user into opening a malicious document).",
      MAV_P_Label:
        'The attack requires the attacker to physically touch or manipulate the vulnerable component. Physical interaction may be brief or persistent.',
      MAC_Heading:
        "This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. Such conditions may require the collection of more information about the target or computational exceptions. The assessment of this metric excludes any requirements for user interaction in order to exploit the vulnerability. If a specific configuration is required for an attack to succeed, the Base metrics should be scored assuming the vulnerable component is in that configuration.",
      MAC_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MAC_L_Label:
        'Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable success against the vulnerable component.',
      MAC_H_Label:
        "A successful attack depends on conditions beyond the attacker's control. That is, a successful attack cannot be accomplished at will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against the vulnerable component before a successful attack can be expected. For example, a successful attack may require an attacker to: gather knowledge about the environment in which the vulnerable target/component exists; prepare the target environment to improve exploit reliability; or inject themselves into the logical network path between the target and the resource requested by the victim in order to read and/or modify network communications (e.g., a man in the middle attack).",
      MPR_Heading:
        'This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.',
      MPR_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MPR_N_Label:
        'The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files to carry out an attack.',
      MPR_L_Label:
        'The attacker is authorized with (i.e., requires) privileges that provide basic user capabilities that could normally affect only settings and files owned by a user. Alternatively, an attacker with Low privileges may have the ability to cause an impact only to non-sensitive resources.',
      MPR_H_Label:
        'The attacker is authorized with (i.e., requires) privileges that provide significant (e.g., administrative) control over the vulnerable component that could affect component-wide settings and files.',
      MUI_Heading:
        'This metric captures the requirement for a user, other than the attacker, to participate in the successful compromise the vulnerable component. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner.',
      MUI_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MUI_N_Label:
        'The vulnerable system can be exploited without any interaction from any user.',
      MUI_R_Label:
        'Successful exploitation of this vulnerability requires a user to take some action before the vulnerability can be exploited.',
      MS_Heading:
        'Does a successful attack impact a component other than the vulnerable component? If so, the Base Score increases and the Confidentiality, Integrity and Authentication metrics should be scored relative to the impacted component.',
      MS_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MS_U_Label:
        'An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority.',
      MS_C_Label:
        'An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities.',
      MC_Heading:
        'This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.',
      MC_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MC_N_Label:
        'There is no loss of confidentiality within the impacted component.',
      MC_L_Label:
        'There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the impacted component.',
      MC_H_Label:
        'There is total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact.',
      MI_Heading:
        'This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information.',
      MI_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MI_N_Label:
        'There is no loss of integrity within the impacted component.',
      MI_L_Label:
        'Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact on the impacted component.',
      MI_H_Label:
        'There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component.',
      MA_Heading:
        'This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. It refers to the loss of availability of the impacted component itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of an impacted component.',
      MA_X_Label:
        'The value assigned to the corresponding Base metric is used.',
      MA_N_Label:
        'There is no impact to availability within the impacted component.',
      MA_L_Label:
        'Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component.',
      MA_H_Label:
        'There is total loss of availability, resulting in the attacker being able to fully deny access to resources in the impacted component; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).',
    },
  },
  registerFirstUser: 'Register First User',
  customData: 'Custom Data',
  custom: 'Custom',
  settings: 'Settings',
  profile: 'Profile',
  loading: 'Loading',
  logout: 'Logout',
  login: 'Login',
  username: 'Username',
  password: 'Password',
  noLanguage: 'No languages are defined.  Please create Languages in ',
  noAudit: 'No Audit Types are defined.  Please create Audit Types in ',
  auditTypes: 'Audit Types',
  auditType: 'Audit Type',
  searchFinds: 'Search Finding',
  myAudits: 'My Audits',
  usersConnected: 'Users Connected',
  awaitingMyReview: 'Awaiting my review',
  newAudit: 'New Audit',
  search: 'Search',
  users: 'Users',
  auditNum1: 'Audit',
  auditNums: 'Audits',
  resultsPerPage: 'Results per page:',
  createAudit: 'Create Audit',
  name: 'Name',
  shortName: 'Short name',
  selectAssessment: 'Select Assessment',
  selectLanguage: 'Select Language',
  participants: 'Participants',
  language: 'Language',
  company: 'Company',
  companies: 'Companies',
  date: 'Date',
  sections: 'Sections',
  generalInformation: 'General Information',
  networkScan: 'Network Scan',
  findings: 'Findings',
  automaticSorting: 'Automatic Sorting',
  sortBy: 'Sort By',
  sortOrder: 'Sort Order',
  ascending: 'Ascending',
  descending: 'Descending',
  me: 'me',
  cvssScore: 'CVSS Score',
  cvssTemporalScore: 'CVSS Temporal Score',
  cvssEnvironmentalScore: 'CVSS Environmental Score',
  priority: 'Priority',
  remediation: 'Remediation',
  remediationDifficulty: 'Remediation Difficulty',
  remediationComplexity: 'Remediation Complexity',
  remediationPriority: 'Remediation Priority',
  easy: 'Easy',
  medium: 'Medium',
  complex: 'Complex',
  low: 'Low',
  high: 'High',
  urgent: 'Urgent',
  title: 'Title',
  category: 'Category',
  selectCategory: 'Select category',
  noCategory: 'No Category',
  vulnType: 'Type',
  undefined: 'Undefined',
  vulnerabilityNum1: 'Vulnerability',
  vulnerabilitiesNums: 'Vulnerabilities',
  definition: 'Definition',
  proofs: 'Proofs',
  details: 'Details',
  completed: 'Completed',
  type: 'Type',
  description: 'Description',
  observation: 'Observation',
  references: 'References',
  one_per_line: '(One per line)',
  customFields: 'Custom Fields',
  affectedAssets: 'Affected Assets',
  courseOfActions: 'Course of actions',
  template: 'Template',
  client: 'Client',
  reviewers: 'Reviewers',
  collaborator: 'Collaborator',
  collaborators: 'Collaborators',
  startDate: 'Start Date',
  endDate: 'End Date',
  reportingDate: 'Reporting Date',
  auditScope: 'Scope (One per line)',
  import: 'Import',
  export: 'Export',
  hostsAssociateScopes: 'Associate imported hosts with Scopes',
  handleCustomData: 'Handle Custom Data',
  clients: 'Clients',
  templates: 'Templates',
  addClient: 'Add Client',
  editClient: 'Edit Client',
  firstname: 'Firstname',
  lastname: 'Lastname',
  email: 'Email',
  function: 'Function',
  phone: 'Phone',
  cell: 'Cell',
  role: 'Role',
  collatorator: 'Collatorator',
  addCollaborator: 'Add Collaborator',
  editCollaborator: 'Edit Collaborator',
  addCompany: 'Add Company',
  editCompany: 'Edit Company',
  logo: 'Logo',
  quantifier: '',
  languages: 'Languages',
  extension: 'Extension',
  createTemplate: 'Create Template',
  file: 'File',
  editTemplate: 'Edit Template',
  importVulnerabilities: 'Import Vulnerabilities',
  importVulnerabilitiesInfo: `Import Vulnerabilities from a .yml or .json file. (Serpico format accepted)<br />
    This allows you to easily import a batch of vulnerabilities templates.`,
  importVulnerabilitiesOk: 'All <strong>{0}</strong> vulnerabilities created',
  importVulnerabilitiesAllExists:
    'All <strong>{0}</strong> vulnerabilities title already exist',
  importVulnerabilitiesPartial:
    '<strong>{0}</strong> vulnerabilities created<br /><strong>{1}</strong> vulnerabilities title already exist',
  exportVulnerabilities: 'Export Vulnerabilities',
  exportVulnerabilitiesInfo: `Export Vulnerabilities to yaml format. This export can easily be re-imported afterward`,
  deleteAllVulnerabilities: 'Delete All Vulnerabilities',
  deleteAllVulnerabilitiesInfo: `Delete all existing vulnerabilities.<br />
    <strong>This action is definitive!!</strong>`,
  customSections: 'Custom Sections',
  listOfLanguages: 'List of Languages',
  editLanguages: 'Edit Languages',
  locale: 'Locale',
  auditTypesUsedInAudits: 'Audit types used in Audits',
  languageUsedInAuditsAndVuls: 'Languages used in Audits and Vulnerabilities',
  addSections: 'Add Sections',
  hideBuiltInSections: 'Hide Built-in Sections',
  listOfAuditTypes: 'List of Audit Types',
  editAuditTypes: 'Edit Audit Types',
  createAtLeastOneLanguage: 'Please create at least one Language',
  createVulnerabilityTypes:
    'Create Vulnerability types used in Vulnerabilities and Findings',
  vulnerabilityTypesList: 'List of Vulnerability Types',
  editVulnerabilityTypes: 'Edit Vulnerability Types',
  createVulnerabilityCategories:
    'Create Vulnerability categories used in Vulnerabilities and Findings',
  defaultSortingOptions: 'Default Sorting Options',
  listOfCategories: 'List of Categories',
  editCategories: 'Edit Categories',
  createAndManageCustomFields:
    'Create and manage Custom Fields for different Views',
  selectView: 'Select View',
  selectSection: 'Select Section',
  selectComponent: 'Select Component',
  label: 'Label',
  size: 'Size',
  offset: 'Offset',
  required: 'Required',
  optionsLanguage: 'Options Language',
  addOption: 'Add Option',
  languageForDefaultText: 'Language (For default text)',
  createCustomSections: 'Create Custom Sections used in Audits',
  fieldForTemplate: 'Field (For Template)',
  customIcon: 'Icon (Material/Font Awesome)',
  field: 'Field',
  editSections: 'Edit Sections',
  vulnerabilityTypes: 'Vulnerability Types',
  vulnerabilityCategories: 'Vulnerability Categories',
  auditGeneral: 'Audit General',
  auditFinding: 'Audit Finding',
  auditSection: 'Audit Section',
  vulnerability: 'Vulnerability',
  checkbox: 'Checkbox',
  editor: 'Editor',
  input: 'Input',
  radio: 'Radio',
  select: 'Select',
  selectMultiple: 'Select Multiple',
  space: 'Space',
  updateUserInformation: 'Update User Information',
  newPassword: 'New Password',
  confirmPassword: 'Confirm Password',
  currentPassword: 'Current Password *',
  reports: 'Reports',
  reportsImagesBorder: 'Report Images border',
  addBorderToImages: 'Add border to images in the generated report.',
  currentColor: 'Current color',
  cvssColors: 'CVSS colors',
  changeCvssColorsDescription:
    'Changes the colors used in the report to represent the different CVSS severities.',
  critical: 'Critical',
  informational: 'Informational',
  reviews: 'Reviews',
  auditUpdateAfterApproval: 'Audit Update After Approval',
  changeApproveBehaviorIfAuditUpdated:
    'Changes the behavior for an approved audit that gets updated. If an audit is updated : ',
  removeAllPriorApprovals: 'All its prior approvals are removed.',
  keepAllPriorApprovals: 'All its prior approvals are kept.',
  mandatoryReview: 'Mandatory Review',
  mandatoryReviewInfo: `Makes the review process mandatory. When activated, a user cannot export an audit unless it has been approved by the specified number of reviewers. 
    <br/>The minimal number of reviewers is also used to determine if a report is marked as approved.`,
  minimalNumberOfReviewers: 'Minimal number of reviewers',
  saveSettings: 'Save settings',
  revertSettingsToDefaults: 'Revert settings to defaults',
  importSettings: 'Import settings',
  exportSettings: 'Export settings',
  mergeVulnerabilities: 'Merge Vulnerabilities',
  mergeVulnerabilitiesInfo: `The goal is to merge different vulnerabilities with different languages into the same vulnerabiliy.<br />
    So a minimum of 2 Languages must exist.`,
  newVulnerability: 'New Vulnerability',
  total: 'Total',
  addVulnerability: 'Add Vulnerability',
  editVulnerability: 'Edit Vulnerability',
  changeCategory: 'Change Category',
  listOfSections: 'List of Sections',
  updateVulnerability: 'Update Vulnerability',
  current: 'Current',
  languageAddFromRight: 'Language (Add from right)',
  languageMoveToLeft: 'Language (Move to left)',
  merge: 'Merge',
  goBack: 'Go back',
  twoStepVerification: '2-Step Verification',
  twoStepVerificationMessage:
    'Open your authentication app and enter the security code it provides.',
  captions: 'Captions',
  captionsDescription:
    "Add Caption labels that will be used in the report (Default is 'Figure')",
  highlightWarning: 'Highlight Warning',
  highlightWarningDescription: `Add a warning message when editing a report and specified color highlighted text is still present.<br />
    Useful for generic text that should be replaced by reporter.`,
  defaultFieldsRequired: 'Default Fields',
  defaultFieldsRequiredDescription:
    'Manage requirement of default Fields in Audits',
  general: 'General',
  scope: 'Scope',
  fieldIsRequired: 'Field is required',
  corrected: 'Corrected',
  not_corrected: 'Not Corrected',
  partially_corrected: 'Partially Corrected',
  not_verifiable: 'Not Verifiable',
  audits: 'Audits',
  multi: 'Multi-Phases',
  retest: 'Retest',
  default: 'Default',
  audit: 'Audit',
  originalAudit: 'Original Audit',
  willBeRemoved: 'will be removed',
  auditPhase: 'Audit Phase',
};
