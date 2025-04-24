import { serve } from "inngest/next";
import { inngest } from "@/app/lib/inngest/client";
import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/app/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});
