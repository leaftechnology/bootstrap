import frappe

def get_context(context):
    context['url'] = frappe.utils.get_url() + "/login"