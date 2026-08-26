import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  CalendarClock, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Database, 
  Code2, 
  Terminal,
  RefreshCw,
  Trash2,
  Filter
} from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Probationary';
  email: string;
  joinDate: string;
}

interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'Sick Leave' | 'Vacation Leave' | 'Emergency Leave';
  startDate: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

const INITIAL_EMPLOYEES: Employee[] = [
  { id: 'EMP-2026-001', name: 'Maria Santos', department: 'IT Support', role: 'Helpdesk Specialist', status: 'Active', email: 'm.santos@company.ph', joinDate: '2025-03-15' },
  { id: 'EMP-2026-002', name: 'Danilo Cruz', department: 'Operations', role: 'Systems Administrator', status: 'Active', email: 'd.cruz@company.ph', joinDate: '2024-08-01' },
  { id: 'EMP-2026-003', name: 'Angelica Ramos', department: 'Administration', role: 'Executive VA', status: 'On Leave', email: 'a.ramos@company.ph', joinDate: '2025-01-10' },
  { id: 'EMP-2026-004', name: 'Kevin Bautista', department: 'Engineering', role: 'Junior Python Dev', status: 'Probationary', email: 'k.bautista@company.ph', joinDate: '2026-02-01' },
];

const INITIAL_LEAVES: LeaveRequest[] = [
  { id: 'LR-101', employeeId: 'EMP-2026-003', employeeName: 'Angelica Ramos', type: 'Vacation Leave', startDate: '2026-08-26', days: 3, status: 'Approved', reason: 'Family engagement & travel' },
  { id: 'LR-102', employeeId: 'EMP-2026-001', employeeName: 'Maria Santos', type: 'Sick Leave', startDate: '2026-08-28', days: 2, status: 'Pending', reason: 'Medical consultation & recovery' },
  { id: 'LR-103', employeeId: 'EMP-2026-004', employeeName: 'Kevin Bautista', type: 'Emergency Leave', startDate: '2026-08-20', days: 1, status: 'Rejected', reason: 'Unverified short notice during probation' },
];

export const InteractiveHRDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employees' | 'leaves' | 'code' | 'schema'>('employees');
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  const [leaves, setLeaves] = useState<LeaveRequest[]>(INITIAL_LEAVES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  
  // Form State for Add Employee
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDept, setNewDept] = useState('IT Support');
  const [newRole, setNewRole] = useState('IT Specialist');
  const [newEmail, setNewEmail] = useState('');
  const [logMessage, setLogMessage] = useState('System ready. SQLite connection initialized.');

  // Auto ID increment generator matching Python logic
  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const nextNumber = employees.length + 1;
    const formattedId = `EMP-2026-${String(nextNumber).padStart(3, '0')}`;
    const newEmp: Employee = {
      id: formattedId,
      name: newName.trim(),
      department: newDept,
      role: newRole,
      status: 'Active',
      email: newEmail || `${newName.toLowerCase().replace(/\s+/g, '.')}@company.ph`,
      joinDate: new Date().toISOString().split('T')[0],
    };

    setEmployees([newEmp, ...employees]);
    setNewName('');
    setNewEmail('');
    setShowAddForm(false);
    setLogMessage(`[SQLITE INSERT] Employee ${formattedId} (${newEmp.name}) committed to table 'employees'.`);
  };

  const handleUpdateLeaveStatus = (leaveId: string, status: 'Approved' | 'Rejected' | 'Pending') => {
    setLeaves(leaves.map(l => l.id === leaveId ? { ...l, status } : l));
    const targetLeave = leaves.find(l => l.id === leaveId);
    setLogMessage(`[SQLITE UPDATE] Leave ${leaveId} for ${targetLeave?.employeeName} status updated to '${status}'.`);
  };

  const handleDeleteEmployee = (id: string, name: string) => {
    setEmployees(employees.filter(e => e.id !== id));
    setLogMessage(`[SQLITE DELETE] Record ID ${id} (${name}) removed from database.`);
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesQuery = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'All' || emp.department === selectedDept;
    return matchesQuery && matchesDept;
  });

  return (
    <div className="bg-stone-900 border border-stone-700/80 rounded-xl overflow-hidden shadow-2xl text-stone-100 font-sans">
      {/* Desktop Window Titlebar (Tkinter / Native Look) */}
      <div className="bg-stone-800/90 px-4 py-2.5 border-b border-stone-700 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-stone-300 ml-2 font-medium">
            AROMIN_HR_Mini_System.py • Tkinter GUI v2.4 (SQLite3)
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            DB: connected (hr_data.db)
          </span>
        </div>
      </div>

      {/* Main Tkinter App Toolbar & Tab Navigation */}
      <div className="bg-stone-850 px-4 py-2 border-b border-stone-800 flex flex-wrap items-center justify-between gap-3 bg-stone-800/50">
        <div className="flex items-center gap-1 bg-stone-900/90 p-1 rounded-lg border border-stone-700/60">
          <button
            id="hr-tab-employees"
            onClick={() => setActiveTab('employees')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition flex items-center gap-1.5 ${
              activeTab === 'employees' 
                ? 'bg-teal-600 text-white shadow-sm' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Employee Records ({employees.length})
          </button>
          <button
            id="hr-tab-leaves"
            onClick={() => setActiveTab('leaves')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition flex items-center gap-1.5 ${
              activeTab === 'leaves' 
                ? 'bg-teal-600 text-white shadow-sm' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            <CalendarClock className="w-3.5 h-3.5" />
            Leave Tracker ({leaves.filter(l => l.status === 'Pending').length} Pending)
          </button>
          <button
            id="hr-tab-code"
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded text-xs font-mono text-xs transition flex items-center gap-1.5 ${
              activeTab === 'code' 
                ? 'bg-teal-600 text-white shadow-sm' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Python Source
          </button>
          <button
            id="hr-tab-schema"
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition flex items-center gap-1.5 ${
              activeTab === 'schema' 
                ? 'bg-teal-600 text-white shadow-sm' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            SQLite Schema
          </button>
        </div>

        {activeTab === 'employees' && (
          <button
            id="hr-btn-add-emp"
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1.5 transition shadow-sm"
          >
            <UserPlus className="w-3.5 h-3.5" />
            {showAddForm ? 'Cancel Form' : '+ Add Employee'}
          </button>
        )}
      </div>

      {/* Dynamic Content View */}
      <div className="p-4 bg-stone-900/90 min-h-[380px]">
        {/* EMPLOYEES TAB */}
        {activeTab === 'employees' && (
          <div className="space-y-4">
            {/* Search & Filter Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-stone-800/60 p-3 rounded-lg border border-stone-700/50">
              <div className="md:col-span-7 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  id="hr-search-input"
                  type="text"
                  placeholder="Filter by name, ID (e.g. EMP-2026), or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-md pl-9 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-teal-500 font-mono"
                />
              </div>
              <div className="md:col-span-5 flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                <select
                  id="hr-dept-filter"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-md px-2.5 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-teal-500"
                >
                  <option value="All">All Departments (4)</option>
                  <option value="IT Support">IT Support</option>
                  <option value="Operations">Operations</option>
                  <option value="Administration">Administration</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>
            </div>

            {/* Quick Add Form Dialog (Simulated Tkinter Modal) */}
            {showAddForm && (
              <form onSubmit={handleAddEmployee} className="bg-stone-800 border border-teal-500/40 rounded-lg p-3.5 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-stone-700 pb-2">
                  <span className="text-xs font-semibold text-teal-400 font-mono flex items-center gap-1.5">
                    <UserPlus className="w-3.5 h-3.5" />
                    New Employee Entry (Auto ID: EMP-2026-00{employees.length + 1})
                  </span>
                  <span className="text-[11px] text-stone-400">Tkinter Form Modal Simulation</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-400 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Roberto Gomez"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-stone-200 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-1">Department</label>
                    <select
                      value={newDept}
                      onChange={(e) => setNewDept(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-stone-200 focus:outline-none focus:border-teal-500"
                    >
                      <option value="IT Support">IT Support</option>
                      <option value="Operations">Operations</option>
                      <option value="Administration">Administration</option>
                      <option value="Engineering">Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-1">Designated Role</label>
                    <input
                      type="text"
                      placeholder="e.g. IT Helpdesk Specialist"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-stone-200 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1 bg-stone-700 hover:bg-stone-600 rounded text-xs text-stone-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1 bg-teal-600 hover:bg-teal-500 rounded text-xs font-semibold text-white shadow"
                  >
                    Commit to SQLite DB
                  </button>
                </div>
              </form>
            )}

            {/* Employee Records Table */}
            <div className="border border-stone-700 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-800/80 text-stone-300 font-mono border-b border-stone-700 text-[11px]">
                    <th className="py-2 px-3">Emp ID</th>
                    <th className="py-2 px-3">Full Name</th>
                    <th className="py-2 px-3">Department</th>
                    <th className="py-2 px-3">Role</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 text-stone-200">
                  {filteredEmployees.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-stone-500 font-mono text-xs">
                        No employee records found matching "{searchQuery}"
                      </td>
                    </tr>
                  ) : (
                    filteredEmployees.map((emp) => (
                      <tr key={emp.id} className="hover:bg-stone-800/50 transition font-mono">
                        <td className="py-2.5 px-3 text-teal-400 font-semibold">{emp.id}</td>
                        <td className="py-2.5 px-3 font-sans font-medium text-stone-100">{emp.name}</td>
                        <td className="py-2.5 px-3 font-sans text-stone-300">{emp.department}</td>
                        <td className="py-2.5 px-3 font-sans text-stone-400">{emp.role}</td>
                        <td className="py-2.5 px-3">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${
                            emp.status === 'Active' 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                              : emp.status === 'On Leave'
                              ? 'bg-amber-950 text-amber-400 border border-amber-800'
                              : 'bg-indigo-950 text-indigo-400 border border-indigo-800'
                          }`}>
                            {emp.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <button
                            onClick={() => handleDeleteEmployee(emp.id, emp.name)}
                            title="Delete Record"
                            className="text-stone-500 hover:text-rose-400 p-1 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* LEAVES TRACKER TAB */}
        {activeTab === 'leaves' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-stone-800/60 p-3 rounded-lg border border-stone-700/50">
              <div>
                <h4 className="text-xs font-semibold text-stone-200">Leave Approval Workflow Queue</h4>
                <p className="text-[11px] text-stone-400">Review pending employee leave applications and execute state transitions.</p>
              </div>
              <span className="text-xs font-mono bg-stone-900 px-2.5 py-1 rounded border border-stone-700 text-stone-300">
                Total Requests: {leaves.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {leaves.map((leave) => (
                <div key={leave.id} className="bg-stone-800/80 border border-stone-700 rounded-lg p-3.5 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono font-semibold text-teal-400">{leave.id}</span>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded ${
                        leave.status === 'Approved' 
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : leave.status === 'Rejected'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : 'bg-amber-950 text-amber-300 border border-amber-800'
                      }`}>
                        {leave.status === 'Approved' && <CheckCircle2 className="w-3 h-3" />}
                        {leave.status === 'Rejected' && <XCircle className="w-3 h-3" />}
                        {leave.status === 'Pending' && <Clock className="w-3 h-3 animate-pulse" />}
                        {leave.status}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-stone-100">{leave.employeeName}</h5>
                    <p className="text-[11px] text-stone-400 font-mono mt-0.5">{leave.employeeId} • {leave.type}</p>
                    
                    <div className="bg-stone-900/80 rounded p-2 mt-2 text-[11px] border border-stone-800">
                      <div className="text-stone-400">Reason: <span className="text-stone-300 italic">"{leave.reason}"</span></div>
                      <div className="text-stone-400 mt-1 font-mono">Date: {leave.startDate} ({leave.days} day{leave.days > 1 ? 's' : ''})</div>
                    </div>
                  </div>

                  {leave.status === 'Pending' ? (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-700/60">
                      <button
                        onClick={() => handleUpdateLeaveStatus(leave.id, 'Approved')}
                        className="py-1 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-medium flex items-center justify-center gap-1 transition"
                      >
                        <CheckCircle2 className="w-3 h-3" /> Approve
                      </button>
                      <button
                        onClick={() => handleUpdateLeaveStatus(leave.id, 'Rejected')}
                        className="py-1 px-2 bg-rose-700 hover:bg-rose-600 text-white rounded text-[11px] font-medium flex items-center justify-center gap-1 transition"
                      >
                        <XCircle className="w-3 h-3" /> Reject
                      </button>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-stone-700/60 text-center">
                      <button
                        onClick={() => handleUpdateLeaveStatus(leave.id, 'Pending')}
                        className="text-[11px] text-stone-400 hover:text-stone-200 underline font-mono flex items-center justify-center gap-1 mx-auto"
                      >
                        <RefreshCw className="w-2.5 h-2.5" /> Re-open to Pending
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PYTHON CODE VIEW */}
        {activeTab === 'code' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-stone-400 text-[11px]">
              <span>src/aromin_hr/database_manager.py (Core SQLite CRUD Implementation)</span>
              <span className="text-teal-400">Python 3.11</span>
            </div>
            <pre className="bg-stone-950 p-4 rounded-lg border border-stone-800 text-emerald-400 overflow-x-auto text-[11px] leading-relaxed">
{`# =========================================================
# AROMIN HR Mini System - Core Database Engine
# Author: Joan Jherizalyn Aromin (BSIT Graduate Batch 2026)
# Tech: Python 3, Tkinter GUI, SQLite3, OOP
# =========================================================

import sqlite3
from dataclasses import dataclass
from typing import List, Optional

class HRDatabaseManager:
    def __init__(self, db_name="aromin_hr.db"):
        self.db_name = db_name
        self.init_database()

    def get_connection(self):
        return sqlite3.connect(self.db_name)

    def init_database(self):
        """Bootstrap relational tables with data integrity constraints"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS employees (
                    id TEXT PRIMARY KEY,
                    full_name TEXT NOT NULL,
                    department TEXT NOT NULL,
                    role_title TEXT NOT NULL,
                    email TEXT UNIQUE,
                    status TEXT DEFAULT 'Active',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS leave_requests (
                    leave_id TEXT PRIMARY KEY,
                    employee_id TEXT NOT NULL,
                    leave_type TEXT NOT NULL,
                    start_date TEXT NOT NULL,
                    duration_days INTEGER NOT NULL,
                    status TEXT CHECK(status IN ('Pending','Approved','Rejected')),
                    reason TEXT,
                    FOREIGN KEY (employee_id) REFERENCES employees (id) ON DELETE CASCADE
                )
            """)
            conn.commit()

    def generate_next_employee_id(self) -> str:
        """Sequential formatted employee ID generator (EMP-YYYY-XXX)"""
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT COUNT(*) FROM employees")
            count = cursor.fetchone()[0] + 1
            return f"EMP-2026-{count:03d}"

    def insert_employee(self, name: str, dept: str, role: str, email: str) -> str:
        new_id = self.generate_next_employee_id()
        with self.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO employees (id, full_name, department, role_title, email) VALUES (?, ?, ?, ?, ?)",
                (new_id, name, dept, role, email)
            )
            conn.commit()
        return new_id`}
            </pre>
          </div>
        )}

        {/* SQLITE SCHEMA VIEW */}
        {activeTab === 'schema' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono">
              <span>Relational Entity Relationship (ERD) Schema</span>
              <span className="text-teal-400">SQLite 3.x Dialect</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-stone-950 p-3.5 rounded-lg border border-stone-800 space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="font-mono font-bold text-teal-400">TABLE employees</span>
                  <span className="text-[10px] text-stone-500 font-mono">Primary Entity</span>
                </div>
                <div className="font-mono text-[11px] space-y-1 text-stone-300">
                  <div className="text-amber-400">🔑 id <span className="text-stone-500">TEXT PRIMARY KEY</span></div>
                  <div>• full_name <span className="text-stone-500">TEXT NOT NULL</span></div>
                  <div>• department <span className="text-stone-500">TEXT NOT NULL</span></div>
                  <div>• role_title <span className="text-stone-500">TEXT NOT NULL</span></div>
                  <div>• email <span className="text-stone-500">TEXT UNIQUE</span></div>
                  <div>• status <span className="text-stone-500">TEXT DEFAULT 'Active'</span></div>
                  <div>• created_at <span className="text-stone-500">TIMESTAMP</span></div>
                </div>
              </div>

              <div className="bg-stone-950 p-3.5 rounded-lg border border-stone-800 space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="font-mono font-bold text-teal-400">TABLE leave_requests</span>
                  <span className="text-[10px] text-stone-500 font-mono">Foreign Entity</span>
                </div>
                <div className="font-mono text-[11px] space-y-1 text-stone-300">
                  <div className="text-amber-400">🔑 leave_id <span className="text-stone-500">TEXT PRIMARY KEY</span></div>
                  <div className="text-sky-400">🔗 employee_id <span className="text-stone-500">TEXT FK -&gt; employees(id)</span></div>
                  <div>• leave_type <span className="text-stone-500">TEXT NOT NULL</span></div>
                  <div>• start_date <span className="text-stone-500">TEXT NOT NULL</span></div>
                  <div>• duration_days <span className="text-stone-500">INTEGER</span></div>
                  <div>• status <span className="text-stone-500">TEXT (Pending/Approved/Rejected)</span></div>
                  <div>• reason <span className="text-stone-500">TEXT</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Log Output Bar (Authentic Developer Vibe) */}
      <div className="bg-stone-950 px-4 py-2 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
        <div className="flex items-center gap-2 truncate">
          <Terminal className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
          <span className="text-stone-300 truncate">{logMessage}</span>
        </div>
        <span className="text-stone-500 hidden sm:inline flex-shrink-0">Python 3.11 Runtime</span>
      </div>
    </div>
  );
};
